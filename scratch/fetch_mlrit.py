import urllib.request
import re

try:
    req = urllib.request.Request('https://mlrit.ac.in', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
    print("MLRIT imgs:", imgs[:10])
except Exception as e:
    print("MLRIT error:", e)

# Download Brihaspathi
try:
    req = urllib.request.Request('https://brihaspathi.com/images/logo.png', headers={'User-Agent': 'Mozilla/5.0'})
    with open('c:/portf/public/logos/brihaspathi.png', 'wb') as f:
        f.write(urllib.request.urlopen(req, timeout=8).read())
    print("Saved brihaspathi.png")
except Exception as e:
    print("Brihaspathi dl error:", e)
