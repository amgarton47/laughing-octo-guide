import mapboxgl from "mapbox-gl";
import createMarker from "./createMarker";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdhcnRvbjQ3IiwiYSI6ImNrcXZxYzU0bjBndTQydnBhYW1kbzc1cjMifQ.jNXnsbR56rKoZaKbY89lvQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-117.7119480755757, 34.0976],
  zoom: 14,
  style: "mapbox://styles/mapbox/streets-v10",
});

const addLandmarks = async () => {
  try {
    const { data } = await axios.get("/api");
    data.forEach((element) => {
      const marker = createMarker(
        element.coordinates,
        element.college,
        element.name
      );
      marker.addTo(map);
    });
  } catch (err) {
    console.log(err);
  }
};

const postLandmark = async (coordinates, college, name) => {
  try {
    await axios
      .post("/api", {
        coordinates: coordinates,
        name: name,
        college: college,
      })
      .then(() => {
        const postMarker = createMarker(coordinates, college, name);
        postMarker.addTo(map);
        console.log("adding to map");
      });
  } catch (err) {
    console.log(err);
  }
};

const lat = document.getElementById("lat"),
  long = document.getElementById("long"),
  collegeEl = document.getElementById("college-selector"),
  submitButton = document.getElementById("submit-button"),
  landmarkName = document.getElementById("landmark-name");

submitButton.addEventListener("click", (evt) => {
  const coordinates = [parseFloat(lat.value), parseFloat(long.value)],
    college = collegeEl.value,
    name = landmarkName.value;

  postLandmark(coordinates, college, name);
});

addLandmarks();

// const scc = createMarker(
//   [-117.71367906374799, 34.09951796352908],
//   "Pomona College"
// );
// scc.addTo(map);

// pomona.addTo(map);
// pitzer.addTo(map);
// scripps.addTo(map);
// cmc.addTo(map);
// mudd.addTo(map);
