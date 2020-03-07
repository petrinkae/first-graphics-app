import * as L from "leaflet";
import homicides from "../_data/harvard_park_homicides.json";
import MiniMap from "leaflet-minimap";

var map = L.map("map", {
  scrollWheelZoom: false
});
var sat = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA",
  {
    minZoom: 9
  }
);
sat.addTo(map);
map.setView([33.983265, -118.306799], 18);

// optional: use template literals
// https://stackoverflow.com/questions/27565056/es6-template-literals-vs-concatenated-strings

homicides.forEach(obj => {
  L.circleMarker([obj.latitude, obj.longitude])
    .addTo(map)
    .bindTooltip(obj.first_name + " " + obj.last_name, { permanent: true });
});

var sat2 = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA",
  {
    maxZoom: 8
  }
);
var mini = new L.Control.MiniMap(sat2);
mini.addTo(map);
