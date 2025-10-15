# Cesium API Practice

## Issue Fixed

The original error `Uncaught TypeError: Cesium.createWorldTerrain is not a function` was caused by using a deprecated Cesium API method.

### What Changed

- **Old (Deprecated):** `Cesium.createWorldTerrain()`
- **New (Current):** `Cesium.Terrain.fromWorldTerrain()`

## Files

### Test1.html
The main file with the corrected Cesium implementation using Cesium Ion assets.

**Requirements:**
- Uses Cesium Ion access token
- Provides high-quality terrain data
- Uses Cesium's Ion imagery provider

**Note:** The included access token is a sample token. For production use, create your own free account at [https://cesium.com/ion](https://cesium.com/ion) and get your own access token.

### Test1_NoToken.html
Alternative version that works without a Cesium Ion token.

**Features:**
- Uses OpenStreetMap tiles (no token required)
- Uses simple ellipsoid terrain provider
- Fully functional without registration

## How to Use

### Option 1: Open Directly (may have limitations)
Simply open either HTML file in a modern web browser.

### Option 2: Use a Local Server (Recommended)
To avoid CORS and worker loading issues, serve the files through a local HTTP server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

Then navigate to:
- Main version: `http://localhost:8000/HTML%20Practice/API%20Practice/Test1.html`
- No-token version: `http://localhost:8000/HTML%20Practice/API%20Practice/Test1_NoToken.html`

## What the Code Does

Both versions:
1. Create a Cesium viewer in the browser
2. Add a marker at New York City
3. Add a label saying "New York City"
4. Fly the camera to New York City with a 3-second animation

## Troubleshooting

If you still see errors:
1. Check the browser console (F12 → Console tab)
2. Ensure you have an internet connection (Cesium loads external resources)
3. Try the `Test1_NoToken.html` version first
4. Use a local server instead of opening files directly
