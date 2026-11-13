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

VERSION = "0.19.1"
URL = f"https://github.com/storytold/gridcraft/releases/download/v{VERSION}/gridcraft-web-{VERSION}.zip"
SHA256 = "48c5d1b101befebb3c5ba3b7a14914f01c3207934813ed07dc4251b7ae116a78"
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
    # Keep upstream relative URLs and nested JS snippets byte-for-byte intact.
    # Prepare the whole distribution before swapping it in, so old hashed assets
    # do not accumulate and a failed copy leaves the installed build untouched.
    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".gridcraft-vendor-", dir=DESTINATION.parent) as directory:
        temporary = Path(directory)
        replacement = temporary / "next"
        backup = temporary / "previous"
        shutil.copytree(staging, replacement)
        if DESTINATION.exists():
            DESTINATION.rename(backup)
        try:
            replacement.rename(DESTINATION)
        except BaseException:
            if backup.exists():
                backup.rename(DESTINATION)
            raise
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
