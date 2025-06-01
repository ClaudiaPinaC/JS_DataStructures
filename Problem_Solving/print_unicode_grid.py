import requests
import sys
import io
from bs4 import BeautifulSoup
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def print_unicode_grid(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        html = response.text

        soup = BeautifulSoup(html, 'html.parser')
        rows = soup.find_all('tr')

        points = []
        max_x = 0
        max_y = 0

        for row in rows:
            cells = row.find_all('td')
            if len(cells) != 3:
                continue

            try:
                x = int(cells[0].get_text(strip=True))
                char = cells[1].get_text(strip=True)
                y = int(cells[2].get_text(strip=True))
            except ValueError:
                continue

            points.append((x, y, char))
            max_x = max(max_x, x)
            max_y = max(max_y, y)

        grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
        for x, y, char in points:
            grid[y][x] = char

        for row in reversed(grid):
            print(''.join(row))

    except Exception as e:
        print("Error:", e)

# Run it with the given URL
googleDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub'
googleDocUrl2 = 'https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub'
print_unicode_grid(googleDocUrl2)