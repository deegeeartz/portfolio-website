import sys
from PIL import Image, ImageDraw

def crop_to_circle(img):
    # Crop to square first
    min_dim = min(img.size)
    left = (img.size[0] - min_dim) / 2
    top = (img.size[1] - min_dim) / 2
    right = (img.size[0] + min_dim) / 2
    bottom = (img.size[1] + min_dim) / 2
    img = img.crop((left, top, right, bottom))
    
    # Ensure image has an alpha channel
    img = img.convert("RGBA")
    
    # Create circular mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, min_dim, min_dim), fill=255)
    
    # Apply mask
    img.putalpha(mask)
    return img

try:
    source_path = r"C:\Users\Quonote Entreprise\Documents\mydp.jpg"
    thumb_path = r"c:\Users\Quonote Entreprise\.gemini\antigravity-ide\scratch\portfolio-website\public\profile-thumb.webp"

    img = Image.open(source_path)
    thumb = crop_to_circle(img)
    thumb.thumbnail((64, 64))
    
    # Save as WebP which supports transparency
    thumb.save(thumb_path, "WEBP", quality=90)
    print("Circular thumbnail created successfully!")
except Exception as e:
    print(f"Error: {e}")
