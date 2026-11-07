import urllib.request
import re
import json

req = urllib.request.Request('https://www.jmangroup.com', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https?://[^\s"\'<>]+\.(?:svg|png|webp)', html)
        logos = [m for m in matches if 'logo' in m.lower() or 'jman' in m.lower() or 'brand' in m.lower() or 'header' in m.lower()]
        print("Logos:", json.dumps(list(set(logos)), indent=2))
        
        # also find svg elements with class or id containing logo
        svg_matches = re.findall(r'(<svg[^>]*class="[^"]*logo[^"]*"[^>]*>.*?</svg>)', html, re.DOTALL | re.IGNORECASE)
        print("SVG matches count:", len(svg_matches))
        if svg_matches:
            print("First SVG:", svg_matches[0][:300])
except Exception as e:
    print("Error:", e)
