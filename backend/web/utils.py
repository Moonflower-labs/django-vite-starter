import json
import os
from pathlib import Path
from django.conf import settings


def get_vite_manifest():
    try:
        manifest_path = os.path.join(
            settings.BASE_DIR, '..', 'frontend', 'dist', '.vite', 'manifest.json')
        with open(manifest_path) as f:
            return json.load(f)
    except FileNotFoundError:
        # Handle the case where the manifest file is not found
        print(f"Manifest file not found at {manifest_path}")
        return {}
    except json.JSONDecodeError:
        # Handle the case where the manifest file is not valid JSON
        print(f"Error decoding JSON from manifest file at {manifest_path}")
        return {}


def get_bundle_files():
    manifest = get_vite_manifest()
    js_files = []
    css_files = []

    for entry_data in manifest.values():
        entry_js_files = entry_data.get('file')
        if entry_js_files:
            if isinstance(entry_js_files, str):
                js_files.append(entry_js_files)
            else:
                js_files.extend(entry_js_files)

        entry_css_files = entry_data.get('css')
        if entry_css_files:
            if isinstance(entry_css_files, str):
                css_files.append(entry_css_files)
            else:
                css_files.extend(entry_css_files)

    return js_files, css_files
