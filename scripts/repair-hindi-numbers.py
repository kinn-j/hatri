"""Audit machine Hindi drafts and keep recipe numeric ranges exact.

Usage: python scripts/repair-hindi-numbers.py CORPUS_JSON PROGRESS_JSON OUTPUT_JS
This produces a safety-focused draft, not a substitute for editorial review.
"""

import json
import importlib.util
import re
import sys
from pathlib import Path

from bhashantar import Translator

spec = importlib.util.spec_from_file_location('hindi_pack', Path(__file__).with_name('build-hindi-pack.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
output_file = module.output_file


MIXED = {"¼": "1/4", "½": "1/2", "¾": "3/4", "⅓": "1/3", "⅔": "2/3"}
RANGE = re.compile(r"(?<!\w)(\d+(?:\.\d+)?)[–-](\d+(?:\.\d+)?)(?!\w)")
MIXED_NUMBER = re.compile(r"(\d+)([¼½¾⅓⅔])")
# Editorial corrections for ingredient identity or tablespoon/teaspoon confusion.
# Extend this reviewed map as the English source catalog changes.
MANUAL_CORRECTIONS = {
    'Blanch the florets for 2 min, drain and pat dry. Whisk flours, seasonings and enough water for a batter that coats a spoon.':
        'फूलगोभी के टुकड़ों को उबलते पानी में 2 मिनट ब्लांच करें, पानी निथारें और थपथपाकर सुखाएँ। दोनों आटों और मसालों में इतना पानी फेंटकर मिलाएँ कि घोल चम्मच पर चिपक सके।',
    '1 cup amaranth flour': '1 कप राजगीरे का आटा',
    '1 cup buckwheat flour': '1 कप कुट्टू का आटा',
    '1 cup buckwheat groats': '1 कप कुट्टू के साबुत दाने',
    '1 carrot, 100 g cabbage and 2 garlic cloves': '1 गाजर, 100 ग्राम पत्तागोभी और लहसुन की 2 कलियाँ',
    '1 cup fresh pigeon peas, 1 tsp ginger, optional green chilli, 1 tsp sesame and 1 tbsp lemon juice':
        '1 कप ताज़ी अरहर, 1 छोटी चम्मच अदरक, चाहें तो हरी मिर्च, 1 छोटी चम्मच तिल और 1 बड़ा चम्मच नींबू का रस',
    '1 cup curd plus 2 tbsp for dough': '1 कप दही और आटे के लिए 2 बड़े चम्मच अतिरिक्त दही',
    '1 cup atta, ½ tsp salt, 1 tbsp ghee plus 2 tsp for brushing':
        '1 कप आटा, ½ छोटी चम्मच नमक, 1 बड़ा चम्मच घी और ऊपर लगाने के लिए 2 छोटी चम्मच घी',
    '1 cup flour, ¼ cup ground almonds, 1½ tsp baking powder, ½ cup sugar, ⅓ cup each curd and melted butter, zest and ¼ cup juice of an orange':
        '1 कप आटा, ¼ कप पिसे बादाम, 1½ छोटी चम्मच बेकिंग पाउडर, ½ कप चीनी, ⅓ कप दही और ⅓ कप पिघला मक्खन, संतरे का कद्दूकस छिलका और ¼ कप संतरे का रस',
}


def numeric_ranges(text):
    return RANGE.findall(text)


def missing_ranges(source, hindi):
    # A duration or temperature range is dangerous if either boundary vanishes.
    return [(low, high) for low, high in numeric_ranges(source)
            if not re.search(rf"(?<!\d){re.escape(low)}(?!\d)", hindi)
            or not re.search(rf"(?<!\d){re.escape(high)}(?!\d)", hindi)]


def model_input(source):
    source = MIXED_NUMBER.sub(lambda m: f"{m[1]} and { {'½':'a half','¼':'a quarter','¾':'three quarters','⅓':'one third','⅔':'two thirds'}[m[2]]}", source)
    for glyph, ratio in MIXED.items():
        source = source.replace(glyph, ratio)
    source = RANGE.sub(lambda m: f"{m[1]} to {m[2]}", source)
    source = re.sub(r"\bmin\b", "minutes", source)
    source = re.sub(r"\btbsp\b", "tablespoons", source)
    source = re.sub(r"\btsp\b", "teaspoons", source)
    return source


def fix_fractions(source, hindi):
    for mixed in MIXED_NUMBER.finditer(source):
        whole, glyph = mixed.groups()
        ratio = MIXED[glyph]
        bad = whole + ratio
        # Model sees typographic 1½ as 11/2 and may publish a 5½-fold error.
        hindi = re.sub(rf"(?<!\d){re.escape(bad)}(?!\d)", whole + glyph, hindi)
        hindi = re.sub(rf"(?<!\d){re.escape(whole + ratio.replace('/', ' '))}(?!\d)", whole + glyph, hindi)
        hindi = hindi.replace(f"{whole}.{ratio}", whole + glyph)
    if "¾" in source and "3-4" in hindi and "3–4" not in source:
        hindi = hindi.replace("3-4", "¾")
    if "1.1" in source:
        hindi = hindi.replace("1. 1", "1.1")
    return hindi


def suffix_for_missing(source, missing):
    phrases = []
    for low, high in missing:
        match = re.search(rf"(?<!\d){re.escape(low)}[–-]{re.escape(high)}\s*([^,.;)]{{0,15}})", source)
        unit = match.group(1).strip().split(' ')[0].lower() if match else ''
        label = {'min':'मिनट', 'minutes':'मिनट', 'minute':'मिनट', 'hours':'घंटे',
                 'hrs':'घंटे', 'whistles':'सीटी', '°c':'°C', '°f':'°F',
                 'cups':'कप', 'cup':'कप', 'tbsp':'बड़े चम्मच', 'tsp':'छोटे चम्मच',
                 'g':'ग्राम', 'ml':'मिलीलीटर'}.get(unit, '')
        phrases.append(f"{low}–{high}" + (f" {label}" if label else ''))
    return ' (सटीक समय/मात्रा: ' + '; '.join(phrases) + ')'


def main():
    corpus_path, progress_path, destination = map(Path, sys.argv[1:])
    corpus = json.loads(corpus_path.read_text(encoding='utf-8'))
    translated = json.loads(progress_path.read_text(encoding='utf-8'))
    authored = list(dict.fromkeys(corpus['amounts'] + corpus['steps']))
    flagged = [source for source in authored if missing_ranges(source, translated[source])]
    print(f"Revisiting {len(flagged)} numeric-range translations", flush=True)
    model = Translator(threads=4, beam_size=4, max_batch_size=16)
    for start in range(0, len(flagged), 32):
        batch = flagged[start:start + 32]
        outputs = model.translate([model_input(source) for source in batch])
        for source, revised in zip(batch, outputs):
            if len(missing_ranges(source, revised)) < len(missing_ranges(source, translated[source])):
                translated[source] = revised.strip()
    corrected = appended = 0
    for source in authored:
        value = fix_fractions(source, translated[source])
        if value != translated[source]:
            corrected += 1
        missing = missing_ranges(source, value)
        if missing:
            # Make the exact source numbers explicit even if the model elided them.
            value += suffix_for_missing(source, missing)
            appended += 1
        translated[source] = value
    translated.update(MANUAL_CORRECTIONS)
    progress_path.write_text(json.dumps(translated, ensure_ascii=False), encoding='utf-8')
    print(f"Fixed {corrected} mixed fractions; annotated {appended} remaining ranges", flush=True)
    print(f"Packaged {output_file(corpus, translated, destination)} Hindi entries", flush=True)


if __name__ == '__main__':
    if len(sys.argv) != 4:
        raise SystemExit('Pass CORPUS_JSON PROGRESS_JSON OUTPUT_JS')
    main()
