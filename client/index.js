import mapboxgl from "mapbox-gl";
import createMarker from "./createMarker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdhcnRvbjQ3IiwiYSI6ImNrcXZxYzU0bjBndTQydnBhYW1kbzc1cjMifQ.jNXnsbR56rKoZaKbY89lvQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-117.7119480755757, 34.0976],
  zoom: 16,
  style: "mapbox://styles/mapbox/streets-v10",
});

const scc = createMarker([-117.71367906374799, 34.09951796352908], "pomona");

scc.addTo(map);

// pomona.addTo(map);
// pitzer.addTo(map);
// scripps.addTo(map);
// cmc.addTo(map);
// mudd.addTo(map);
