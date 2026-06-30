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
    public = r"c:\Users\Quonote Entreprise\.gemini\antigravity-ide\scratch\portfolio-website\public"
    
    # === 1. New headshot for Hero ===
    new_headshot = r"C:\Users\Quonote Entreprise\Documents\385917.jpeg"
    img = Image.open(new_headshot)
    # Save full-size hero image as WebP (high quality, optimized)
    img.save(f"{public}\\headshot.webp", "WEBP", quality=85)
    print(f"Hero headshot saved ({img.size[0]}x{img.size[1]})")
    
    # === 2. Circular thumbnail from new headshot (for navbar/favicon) ===
    thumb = crop_to_circle(img.copy())
    thumb.thumbnail((64, 64))
    thumb.save(f"{public}\\profile-thumb.webp", "WEBP", quality=90)
    print("Circular thumbnail (64x64) saved")
    
    # === 3. Rename existing casual photo for About section ===
    old_casual = r"C:\Users\Quonote Entreprise\Documents\mydp.jpg"
    casual = Image.open(old_casual)
    casual.save(f"{public}\\about-pic.webp", "WEBP", quality=85)
    print(f"About section photo saved ({casual.size[0]}x{casual.size[1]})")
    
    print("\nAll images optimized successfully!")
except Exception as e:
    print(f"Error: {e}")
