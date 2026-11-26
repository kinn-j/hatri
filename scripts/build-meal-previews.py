"""Build the meal photo atlas from the catalog with FFmpeg."""
from concurrent.futures import ThreadPoolExecutor
from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "images"
SIZE = 72
COLUMNS = 32


def thumbnail(name):
    return subprocess.run(
        ["ffmpeg", "-v", "error", "-threads", "1", "-i", str(IMAGES / name),
         "-filter_threads", "1",
         "-vf", f"scale={SIZE}:{SIZE}:force_original_aspect_ratio=increase,crop={SIZE}:{SIZE}",
         "-frames:v", "1", "-pix_fmt", "rgb24", "-f", "rawvideo", "-"],
        check=True, capture_output=True,
    ).stdout


def replace_definition(path, pattern, definition):
    original = path.read_bytes()
    newline = "\r\n" if b"\r\n" in original else "\n"
    source = original.decode("utf-8").replace("\r\n", "\n")
    source, count = re.subn(pattern, lambda _: definition, source, count=1)
    if count != 1:
        raise ValueError(f"Could not update the meal preview definition in {path.name}")
    path.write_bytes(source.replace("\n", newline).encode("utf-8"))


def main():
    catalog = json.loads((IMAGES / "photos.json").read_text(encoding="utf-8"))
    names = sorted(set(catalog.values()))
    rows = (len(names) + COLUMNS - 1) // COLUMNS
    width, height = COLUMNS * SIZE, rows * SIZE
    pixels = bytearray(width * height * 3)
    with ThreadPoolExecutor(max_workers=6) as pool:
        for index, tile in enumerate(pool.map(thumbnail, names)):
            x, y = index % COLUMNS * SIZE, index // COLUMNS * SIZE
            row_bytes = SIZE * 3
            for line in range(SIZE):
                start = ((y + line) * width + x) * 3
                pixels[start:start + row_bytes] = tile[line * row_bytes:(line + 1) * row_bytes]

    atlas = IMAGES / "meal-previews.webp"
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
         "-video_size", f"{width}x{height}", "-i", "-", "-frames:v", "1",
         "-c:v", "libwebp", "-quality", "45", "-compression_level", "6",
         str(atlas)],
        input=pixels, check=True,
    )

    asset = f"./images/{atlas.name}?v={sha256(atlas.read_bytes()).hexdigest()[:12]}"
    mapping = {f"images/{name}": i for i, name in enumerate(names)}
    definitions = (
        f"var mealPreviewSize={SIZE},mealPreviewColumns={COLUMNS},mealPreviewRows={rows};\n"
        f'var mealPreviewAsset="{asset}";\n'
        f"var mealPhotoPreviews={json.dumps(mapping, indent=0)};\n"
    )
    replace_definition(
        ROOT / "index.html",
        r"var mealPreviewSize=[^\n]+\nvar mealPreviewAsset=[^\n]+\nvar mealPhotoPreviews=\{[^}]+\};\n",
        definitions,
    )
    replace_definition(
        ROOT / "sw.js", r"const MEAL_PREVIEW = '[^']+';", f"const MEAL_PREVIEW = '{asset}';",
    )


if __name__ == "__main__":
    main()
