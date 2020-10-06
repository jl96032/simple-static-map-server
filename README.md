# Mapbox GL JS-based rasterizer

This project comes from a silly idea: creating a raster map web server, using [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) as a rendering engine instead of the [Mapbox GL native](https://github.com/mapbox/mapbox-gl-native).

Under the hood, it launches a headless Chromium browser with Puppeteer, go to a special page with a Mapbox GL JS map instance, and takes screenshots to server as images.

*Note: for now uses the [Qwant Maps](https://www.qwant.com/maps) style*

## Usage

```
$ PORT=<port> node index.js
```

Then go to `http://localhost:<port>/` and send queries with those query string parameters (all are optional):

|Parameter|Default|Description|
|---|---|---|
|`center`|`0,0`|Coordinates of the center, as `<longitude>,<latitude>`|
|`zoom`|`3`|Zoom level|
|`width`|`400`|Image width in pixels|
|`height`|`400`|Image height in pixels|
|`type`|`png`| `png` or `jpeg`|

Example: `http://localhost:3666/?width=600&height=300&zoom=10&center=2.37,48.83`
