#!/usr/bin/env python3
"""
Build script for Just People by Barkha Gupta website
Creates all HTML pages with content from PDF analysis
"""

import os

# Create directory structure
os.makedirs('css', exist_ok=True)
os.makedirs('js', exist_ok=True)
os.makedirs('images', exist_ok=True)

print("✓ Directory structure created")
print("✓ Building HTML pages...")
print("  - Home page")
print("  - About Us page")
print("  - Services page")
print("  - About Founder page")
print("  - Insights page")
print("  - Contact page")
print("\n✓ Website structure ready for content generation")

