"""Create lossless WOFF2 versions of the school fonts (requires fonttools[woff])."""
from pathlib import Path
from fontTools.ttLib import TTFont

for name in ('lora-regular', 'lora-bold', 'patrick-hand'):
    source = Path('public/assets') / f'{name}.ttf'
    target = source.with_suffix('.woff2')
    font = TTFont(source)
    font.flavor = 'woff2'
    font.save(target)
    print(f'{name}: {source.stat().st_size:,} -> {target.stat().st_size:,} bytes')
