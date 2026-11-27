"""Reconcile the committed Excel catalog with live recipe names and categories.

Reads a JSON list of {"name": str, "categories": [str, ...]} from stdin.
Uses only Python's standard library, so GitHub Actions needs no Excel packages.
"""

import json
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


MAIN = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
HUMAN_TO_ID = {"Curry/dal": "Main", "One-pot": "Complete", "No-cook": "NoCook", "Pickle/jam": "Pickle"}


def workbook_rows(archive, sheet_name):
    shared = []
    if "xl/sharedStrings.xml" in archive.namelist():
        root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
        shared = ["".join(n.text or "" for n in item.iter(MAIN + "t"))
                  for item in root.findall(MAIN + "si")]
    root = ET.fromstring(archive.read("xl/worksheets/" + sheet_name))
    result = []
    for row in root.iter(MAIN + "row"):
        values = {}
        for cell in row.findall(MAIN + "c"):
            column = "".join(c for c in cell.attrib["r"] if c.isalpha())
            value = cell.find(MAIN + "v")
            inline = cell.find(MAIN + "is")
            if inline is not None:
                values[column] = "".join(n.text or "" for n in inline.iter(MAIN + "t"))
            elif value is not None:
                values[column] = shared[int(value.text)] if cell.get("t") == "s" else value.text
        if int(row.attrib.get("r", 0)) >= 4:
            result.append(values)
    return result


def main():
    expected = json.load(sys.stdin)
    path = Path(__file__).resolve().parents[1] / "docs" / "Hatri_Recipe_Catalog.xlsx"
    with zipfile.ZipFile(path) as archive:
        catalog = workbook_rows(archive, "sheet1.xml")
        methods = workbook_rows(archive, "sheet2.xml")

    book = {r.get("A", ""): {HUMAN_TO_ID.get(x.strip(), x.strip()) for x in (r.get("B") or "").split(",") if x.strip()}
            for r in catalog}
    actual = {r["name"]: set(r["categories"]) for r in expected}
    recipe_names = [r.get("A") for r in methods]
    catalog_names = [r.get("A") for r in catalog]
    issues = []
    if len(actual) != len(expected):
        issues.append("Repeated names in the live catalog")
    if len(book) != len(catalog_names):
        issues.append("Repeated names in the Excel dish catalog")
    if len(set(recipe_names)) != len(recipe_names):
        issues.append("Repeated names in the Excel Recipes tab")
    if set(recipe_names) != set(actual):
        issues.append("Recipes tab differs from the live catalog")
    missing = sorted(set(actual) - set(book))
    extra = sorted(set(book) - set(actual))
    if missing:
        issues.append(f"Missing from Excel ({len(missing)}): {missing[:12]}")
    if extra:
        issues.append(f"Only in Excel ({len(extra)}): {extra[:12]}")
    invalid = [(name, sorted(cats)) for name, cats in book.items() if not cats]
    if invalid:
        issues.append(f"No Excel category ({len(invalid)}): {invalid[:12]}")
    mismatches = [(name, sorted(actual[name]), sorted(book[name]))
                  for name in actual.keys() & book.keys() if actual[name] != book[name]]
    if mismatches:
        issues.append(f"Category mismatches ({len(mismatches)}): {mismatches[:12]}")
    if issues:
        sys.exit("\n".join(issues))
    print(f"Workbook and live catalog match: {len(actual)} unique dishes, all categorized.")


if __name__ == "__main__":
    main()
