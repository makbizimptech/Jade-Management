import cv2
import os
import glob
import numpy as np

src_dir = r"C:\Users\makga\.gemini\antigravity\brain\a3377574-bb12-4f4d-819f-08f2c9dcf362"
dest_dir = r"d:\JADE\public\images"

tasks = [
    ("about_craft", "about/about-craft.webp", 1400, 1750),
    ("about_detail", "about/about-detail.webp", 900, 900),
    ("service_renovation", "services/service-renovation.webp", 1000, 1250),
    ("service_kitchen", "services/service-kitchen.webp", 1000, 1250),
    ("service_bathroom", "services/service-bathroom.webp", 1000, 1250),
    ("service_basement", "services/service-basement.webp", 1000, 1250),
    ("service_addition", "services/service-addition.webp", 1000, 1250),
    ("service_general", "services/service-general.webp", 1000, 1250),
    ("capability_structure", "projects/capability-structure.webp", 1600, 2000),
    ("capability_millwork", "projects/capability-millwork.webp", 1600, 1067),
    ("capability_tile", "projects/capability-tile.webp", 1200, 1500),
    ("capability_light", "projects/capability-light.webp", 1200, 1500),
    ("capability_surface", "projects/capability-surface.webp", 1600, 1067),
]

def center_crop_and_resize(img, target_w, target_h):
    h, w = img.shape[:2]
    target_aspect = target_w / target_h
    img_aspect = w / h
    
    if img_aspect > target_aspect:
        new_w = int(h * target_aspect)
        start_x = (w - new_w) // 2
        cropped = img[:, start_x:start_x+new_w]
    else:
        new_h = int(w / target_aspect)
        start_y = (h - new_h) // 2
        cropped = img[start_y:start_y+new_h, :]
        
    return cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_AREA)

for prefix, dest_rel, tw, th in tasks:
    matches = glob.glob(os.path.join(src_dir, f"{prefix}_*.jpg"))
    if matches:
        img_path = matches[0]
        img = cv2.imread(img_path)
        if img is not None:
            processed = center_crop_and_resize(img, tw, th)
            out_path = os.path.join(dest_dir, dest_rel)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            cv2.imwrite(out_path, processed, [cv2.IMWRITE_WEBP_QUALITY, 80])
            print(f"Saved {out_path}")
        else:
            print(f"Failed to read {img_path}")

# CTA Potential
matches = glob.glob(os.path.join(src_dir, "service_renovation_*.jpg"))
if matches:
    img = cv2.imread(matches[0])
    h, w = img.shape[:2]
    scale = 1350 / h
    new_w = int(w * scale)
    resized = cv2.resize(img, (new_w, 1350), interpolation=cv2.INTER_AREA)

    cta = np.zeros((1350, 2400, 3), dtype=np.uint8)
    left_color = np.mean(resized[:, :10], axis=(0,1))
    # Fill with a dark version of the left edge color
    for c in range(3):
        cta[:, :, c] = int(left_color[c] * 0.15)

    start_x = 2400 - new_w
    cta[:, start_x:] = resized

    blend_width = 600
    for i in range(blend_width):
        alpha = (i / blend_width) ** 2  # quadratic blend
        x = start_x + i
        for c in range(3):
            cta[:, x, c] = cta[:, x, c] * (1 - alpha) + resized[:, i, c] * alpha

    cta_out = os.path.join(dest_dir, "cta/cta-potential.webp")
    os.makedirs(os.path.dirname(cta_out), exist_ok=True)
    cv2.imwrite(cta_out, cta, [cv2.IMWRITE_WEBP_QUALITY, 80])
    print(f"Saved {cta_out}")
