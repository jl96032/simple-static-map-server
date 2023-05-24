import { Map, Marker } from 'https://cdn.skypack.dev/maplibre-gl@1';

const map = new Map({
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
const marker = new Marker()
.setLngLat([30.5, 50.5]);


  

window.map = map;
window.marker = marker;
