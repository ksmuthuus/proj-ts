/// <reference path="../node_modules/@types/mapbox-gl/index.d.ts" />

import User from "./User";
import Company from "./Company";
import CustomMap from "./CustomMap";

const user = new User();
const company = new Company();

const map = new CustomMap("map");
map.marker(user);
map.marker(company);

// mapboxgl.accessToken =
//   "pk.eyJ1Ijoia3NtdXRodXVzIiwiYSI6ImNrNTBvZ2hmczBneTEzZXFuYWRocm1yYmEifQ.7mAaE2Z5SBvHSEQ3oD4YXA";
// new mapboxgl.Map({
//   container: "map", // container id
//   style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
//   center: [-74.5, 40], // starting position [lng, lat]
//   zoom: 9 // starting zoom
// });
