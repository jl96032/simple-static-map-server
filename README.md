similar project.
https://github.com/consbio/mbgl-renderer/blob/main/src/render.js

# simple-static-map-server

This project comes from a silly idea: creating a raster map web server, using the browser lib [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js) as a rendering engine instead of the low-level [MapLibre GL native](https://github.com/maplibre/maplibre-gl-native) lib.

Under the hood, it launches a headless Chromium browser with [Puppeteer](https://github.com/puppeteer/puppeteer), go to a special page with a Maplibre GL JS map instance, and takes screenshots to serve as images.

## Example

Request: `http://localhost:3000/map?width=600&height=300&zoom=12&center=-3.825,57.185&style=qwantmaps`


http://localhost:3000/statmap?width=600&height=600&zoom=12&center=18.034058,59.349296&style=enirovector&type=png

Result:

![Result of the above request](./imgs/example.png)

## Usage

### Configuration

The [`mapstyles.json`](./mapstyles.json) file contains an array of available map styles. Each is defined by 3 properties:

- `name`: the style name, used to specify which style to render for multiple style instances
- `styleUrl`: the url of the vector map style definition in JSON
- `attribution`: the attribution string, to display proper copyright information on each generated image

You should replace the styles in the current file by styles you own or have the rights to use.

#### Raster tiles

Alternatively, to use raster tiles, you can define a `rasterTiles` object in place of `styleUrl`.
See the current [`mapstyles.json`](./mapstyles.json) file for an example.

### Starting the server

```
$ node index.js
```

By default, it runs on the port 3000. You can specify another port using an env var.

```
$ PORT=3666 node index.js
```

### Requests

Then go to `http://localhost:<port>/map` and send queries with those query string parameters:

| Parameter | Description                                                    | Default             |
| --------- | -------------------------------------------------------------- | ------------------- |
| `style`   | Name of the map style, as defined in the `mapstyles.json` file | First defined style |
| `center`  | Coordinates of the center, as `<longitude>,<latitude>`         | `0,0`               |
| `zoom`    | Zoom level                                                     | `3`                 |
| `width`   | Image width in pixels                                          | `400`               |
| `height`  | Image height in pixels                                         | `400`               |
| `type`    | `png` or `jpeg`                                                | `png`               |
| `timeout` | Query timeout in milliseconds                                  | `30000`             |



docker build .
docker build . -t liang/statmap

    docker run --rm -v /Users/liang/work/node/mapengine:/opt/tegola_config -p 3000:3000 --name liangStatmapTest liang/statmap

    http://localhost:3000/statmap?width=600&height=600&zoom=12&center=18.034058,59.349296&style=enirovector&type=png

    docker build -f Dockerfile -t 205531973444.dkr.ecr.eu-north-1.amazonaws.com/eniro/tegola-prod .

  ```
  docker build -f Dockerfile -t 886109540269.dkr.ecr.eu-north-1.amazonaws.com/eniro/statmap-test .

### push to ECS container

  ```
  #### test 
 
    docker push 886109540269.dkr.ecr.eu-north-1.amazonaws.com/eniro/statmap-test

886109540269.dkr.ecr.eu-north-1.amazonaws.com/eniro/statmap-test

    aws sso login --profile eniro-geo-sandbox
aws ecr --profile=eniro-geo-sandbox get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 886109540269.dkr.ecr.eu-north-1.amazonaws.com/eniro/tegola-liang