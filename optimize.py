import sys
try:
    from PIL import Image
    import os

    source_path = r"C:\Users\Quonote Entreprise\Documents\mydp.jpg"
    dest_path = r"c:\Users\Quonote Entreprise\.gemini\antigravity-ide\scratch\portfolio-website\public\profile-pic.webp"
    thumb_path = r"c:\Users\Quonote Entreprise\.gemini\antigravity-ide\scratch\portfolio-website\public\profile-thumb.webp"

    img = Image.open(source_path)
    
    # Save standard optimized version
    img.save(dest_path, "WEBP", quality=80)
    
    # Save tiny thumbnail for the navbar logo
    img.thumbnail((64, 64))
    img.save(thumb_path, "WEBP", quality=80)
    print("Optimization successful!")
except ImportError:
    print("Pillow not found, skipping optimization.")
except Exception as e:
    print(f"Error: {e}")
