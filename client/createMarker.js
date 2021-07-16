import mapboxgl from "mapbox-gl";

const schoolColors = {
  "Pomona College": "#20438f",
  "Pitzer College": "#F7941D",
  "Scripps College": "#2b493e",
  "Claremont McKenna College": "#74001C",
  "Harvey Mudd College": "#eaaa00",
};

export default (coordinates, college, name) => {
  let m = new mapboxgl.Marker({
    color: schoolColors[college],
  });

  const label = document.createElement("p");
  label.innerHTML = name;
  label.style.display = "none";

  m.getElement().appendChild(label);

  m.getElement().addEventListener("mouseenter", (evt) => {
    label.style.display = "block";
  });

  m.getElement().addEventListener("mouseleave", (evt) => {
    label.style.display = "none";
  });

  return m.setLngLat(coordinates);
};
