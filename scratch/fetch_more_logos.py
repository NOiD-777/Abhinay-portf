import urllib.request
import re

targets = [
    ('mlrit', 'https://mlrit.ac.in'),
    ('brihaspathi', 'https://www.brihaspathi.com'),
]

for target, domain in targets:
    try:
        req = urllib.request.Request(domain, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        logos = re.findall(r'https?://[^\s"\'<>]*(?:logo|brand|header)[^\s"\'<>]*(?:png|svg|webp|jpg)', html, re.I)
        print(target, "logos found:", set(logos[:5]))
    except Exception as e:
        print(target, "error:", e)
