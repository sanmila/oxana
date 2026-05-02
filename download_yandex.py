import re
import json
import urllib.request
import os

links = [
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd6",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd5",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd4",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd3",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd2",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effd1",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effcf",
    "https://disk.yandex.ru/a/1i7IUyL1_vW6lg/69f34d19858cb021bf3effce"
]

os.makedirs('assets/videos', exist_ok=True)

for i, link in enumerate(links):
    print(f"Fetching {link}...")
    req = urllib.request.Request(link, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find the JSON data embedded in the page
        match = re.search(r'<script id="store-prefetch" type="application/json">(.*?)</script>', html)
        if match:
            data = json.loads(match.group(1))
            # The structure might have the download URL or a stream URL
            # Let's write the JSON to a file to inspect it
            with open(f'debug_{i}.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
            print("Successfully extracted JSON")
        else:
            print("JSON not found")
    except Exception as e:
        print(f"Error: {e}")
