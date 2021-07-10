import mapboxgl from "mapbox-gl";

const schoolColors = {
  pomona: "#20438f",
  pitzer: "#F7941D",
  scripps: "#2b493e",
  cmc: "#74001C",
  mudd: "#eaaa00",
};

export default (coordinates, college) =>
  new mapboxgl.Marker({
    color: schoolColors[college],
  }).setLngLat(coordinates);
