#!/usr/bin/env python3
"""Reproduce the unmodified, pinned official GridCraft browser distribution.

Run from any directory: python3 scripts/vendor-gridcraft-editor.py
An already-downloaded ZIP may be supplied with --archive /path/to/file.zip.
"""

import argparse
import hashlib
from pathlib import Path, PurePosixPath
import shutil
import stat
import subprocess
import tempfile
import zipfile

VERSION = "0.7.0"
URL = f"https://github.com/storytold/gridcraft/releases/download/v{VERSION}/gridcraft-web-{VERSION}.zip"
SHA256 = "ad10af2baf9c7ed4ccbd81e32b37698f5075cdf4f26b726fee7fc7938a3a8d27"
ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / "public" / "editor-app"


def vendor(archive: Path, staging: Path) -> None:
    digest = hashlib.sha256(archive.read_bytes()).hexdigest()
    if digest != SHA256:
        raise ValueError(f"Archive checksum mismatch: {digest}; expected {SHA256}")
    prefix = f"gridcraft-web-{VERSION}"
    with zipfile.ZipFile(archive) as bundle:
        members = bundle.infolist()
        if sum(item.file_size for item in members) > 50_000_000:
            raise ValueError("Unexpectedly large distribution")
        seen = set()
        for item in members:
            path = PurePosixPath(item.filename)
            mode = item.external_attr >> 16
            if (path.is_absolute() or ".." in path.parts or "\\" in item.filename
                    or not path.parts or path.parts[0] != prefix
                    or stat.S_ISLNK(mode) or item.filename in seen):
                raise ValueError(f"Unsafe ZIP entry: {item.filename}")
            seen.add(item.filename)
            relative = Path(*path.parts[1:])
            if item.is_dir():
                (staging / relative).mkdir(parents=True, exist_ok=True)
            else:
                target = staging / relative
                target.parent.mkdir(parents=True, exist_ok=True)
                with bundle.open(item) as source, target.open("wb") as output:
                    shutil.copyfileobj(source, output)
    for name in ("index.html", "LICENSE-MIT", "LICENSE-APACHE", "README.md", "HOSTING.md"):
        if not (staging / name).is_file():
            raise ValueError(f"Missing required upstream file: {name}")
    # v0.7.0 ships relative asset URLs, including its wasm-bindgen module; no
    # HTML, JavaScript or WebAssembly modifications are necessary for this path.
    DESTINATION.mkdir(parents=True, exist_ok=True)
    for source in staging.iterdir():
        if source.is_dir():
            raise ValueError(f"Unexpected distribution directory: {source.name}")
        shutil.copyfile(source, DESTINATION / source.name)
    print(f"Verified SHA256 {digest}; vendored GridCraft v{VERSION} at {DESTINATION}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive", type=Path)
    args = parser.parse_args()
    with tempfile.TemporaryDirectory(prefix="gridcraft-vendor-") as directory:
        temporary = Path(directory)
        archive = args.archive or temporary / "gridcraft-web.zip"
        if not args.archive:
            subprocess.run(["curl", "--fail", "--location", "--retry", "3", URL, "--output", str(archive)], check=True)
        staging = temporary / "extracted"
        staging.mkdir()
        vendor(archive, staging)


if __name__ == "__main__":
    main()
