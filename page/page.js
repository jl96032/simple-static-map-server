import maplibregl from 'https://cdn.skypack.dev/maplibre-gl@1';

const map = new maplibregl.Map({
  hash: true,
  maxZoom: 20,
  attributionControl: false,
  container: document.getElementById('map'),
  center: [0, 0],
  zoom: 9,
  interactive: false,
});
map.on('idle', () => {
  document.body.classList.remove('loading');
});
/*
const marker = new maplibregl.Marker()
.setLngLat([30.5, 50.5]);
*/

window.maplibregl = maplibregl;
window.map = map;
//window.marker = marker;
