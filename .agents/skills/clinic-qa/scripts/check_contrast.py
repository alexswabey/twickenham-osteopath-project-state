#!/usr/bin/env python3
"""Verify WCAG 2.1 contrast ratios for Meadowside Clinic CSS :root color tokens."""

from pathlib import Path
import re
import sys

CSS_PATH = Path(__file__).resolve().parents[4] / ".." / "meadowside-clinic" / "assets" / "css" / "style.css"


def parse_root_hex_tokens(css_text: str) -> dict[str, str]:
    """Extract hex --color-* custom properties from :root."""
    root_match = re.search(r":root\s*\{(.*?)\}", css_text, re.DOTALL)
    if not root_match:
        raise ValueError("Could not locate :root block in style.css")
    pairs = re.findall(r"(--color-[a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{6})\b", root_match.group(1))
    return {name: value.upper() for name, value in pairs}


def srgb_channel(channel: int) -> float:
    """Convert an 8-bit sRGB channel to linear luminance space."""
    c = channel / 255.0
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def relative_luminance(hex_color: str) -> float:
    """Compute WCAG relative luminance for a 6-digit hex color."""
    hex_clean = hex_color.lstrip("#")
    r, g, b = (int(hex_clean[i : i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * srgb_channel(r) + 0.7152 * srgb_channel(g) + 0.0722 * srgb_channel(b)


def contrast_ratio(fg: str, bg: str) -> float:
    """Return WCAG contrast ratio between two hex colors."""
    l1, l2 = relative_luminance(fg), relative_luminance(bg)
    return (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)


def main() -> int:
    """Run WCAG text (4.5:1) and UI/focus (3.0:1) contrast checks."""
    tokens = parse_root_hex_tokens(CSS_PATH.read_text(encoding="utf-8"))

    checks = [
        ("text on bg", "--color-text", "--color-bg", 4.5),
        ("text on surface", "--color-text", "--color-surface", 4.5),
        ("text on tint", "--color-text", "--color-surface-tint", 4.5),
        ("text on warm", "--color-text", "--color-surface-warm", 4.5),
        ("muted on bg", "--color-text-muted", "--color-bg", 4.5),
        ("muted on tint", "--color-text-muted", "--color-surface-tint", 4.5),
        ("muted on warm", "--color-text-muted", "--color-surface-warm", 4.5),
        ("primary on bg", "--color-primary", "--color-bg", 4.5),
        ("primary on tint", "--color-primary", "--color-surface-tint", 4.5),
        ("surface text on primary", "--color-surface", "--color-primary", 4.5),
        ("surface text on accent", "--color-surface", "--color-accent", 4.5),
        ("accent on bg", "--color-accent", "--color-bg", 4.5),
        ("accent on tint (active nav bar)", "--color-accent", "--color-surface-tint", 3.0),
        ("accent on warm", "--color-accent", "--color-surface-warm", 4.5),
        ("accent on accent-tint", "--color-accent", "--color-accent-tint", 4.5),
        ("input border on surface", "--color-border-input", "--color-surface", 3.0),
        ("error on surface", "--color-error", "--color-surface", 4.5),
        ("error on error-bg", "--color-error", "--color-error-bg", 4.5),
        ("inverse text on primary", "--color-inverse-text", "--color-primary", 4.5),
        ("inverse link on primary", "--color-inverse-link", "--color-primary", 4.5),
        ("inverse link on primary-dark", "--color-inverse-link", "--color-primary-dark", 4.5),
        ("light focus on bg", "--color-focus", "--color-bg", 3.0),
        ("dark focus on primary", "--color-focus-inverse", "--color-primary", 3.0),
        ("dark focus on primary-dark", "--color-focus-inverse", "--color-primary-dark", 3.0),
    ]

    failures = 0
    for label, fg_key, bg_key, minimum in checks:
        fg_hex, bg_hex = tokens[fg_key], tokens[bg_key]
        score = contrast_ratio(fg_hex, bg_hex)
        status = "PASS" if score >= minimum else "FAIL"
        if status == "FAIL":
            failures += 1
        print(f"[{status}] {label:32s} {fg_hex} / {bg_hex} -> {score:.2f}:1 (min {minimum:.1f}:1)")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
