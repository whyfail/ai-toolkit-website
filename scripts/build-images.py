#!/usr/bin/env python3
"""Generate the WebP derivatives used by the site.

The 1800x1200 PNGs in `public/screenshots/` are the canonical source, kept
byte-identical to the app repo's `assets/screenshots/`. The site loads
smaller WebP copies from `public/screenshots/webp/` instead, which cuts the
screenshot payload by roughly 90% (3.2 MB -> 350 KB).

Requires Pillow:  python3 -m pip install Pillow
Run from the docs project root:
    python3 scripts/build-images.py
"""

from pathlib import Path

from PIL import Image

SOURCE_DIR = Path("public/screenshots")
TARGET_DIR = SOURCE_DIR / "webp"
QUALITY = 82
METHOD = 6  # slowest/best compression


def main() -> None:
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    total_in = total_out = 0

    for source in sorted(SOURCE_DIR.glob("*.png")):
        target = TARGET_DIR / f"{source.stem}.webp"
        with Image.open(source) as image:
            image.convert("RGB").save(
                target, "WEBP", quality=QUALITY, method=METHOD
            )

        size_in, size_out = source.stat().st_size, target.stat().st_size
        total_in += size_in
        total_out += size_out
        saved = 100 - size_out * 100 // size_in if size_in else 0
        print(f"{target.name:24s} {size_in // 1024:4d} KB -> {size_out // 1024:4d} KB  -{saved}%")

    print(f"{'total':24s} {total_in // 1024:4d} KB -> {total_out // 1024:4d} KB")


if __name__ == "__main__":
    main()
