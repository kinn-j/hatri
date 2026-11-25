"""Refresh the embedded first-render dish photos after changing the photo catalog."""
import base64
import io
import json
from pathlib import Path

from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
image_dir = root / "images"
files = json.loads((image_dir / "photos.json").read_text())
previews = {}
for name in sorted(set(files.values())):
    with Image.open(image_dir / name) as photo:
        thumb = ImageOps.fit(photo.convert("RGB"), (72, 72), Image.Resampling.LANCZOS)
        output = io.BytesIO()
        thumb.save(output, "WEBP", quality=45, method=6)
        previews["images/" + name] = base64.b64encode(output.getvalue()).decode("ascii")

index = root / "index.html"
html = index.read_text()
start = html.index("var mealPhotoPreviews=")
end = html.index(";\n", start)
index.write_text(html[:start] + "var mealPhotoPreviews=" + json.dumps(previews, indent=0) + html[end:])
