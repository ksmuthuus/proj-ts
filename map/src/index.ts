/// <reference path="../node_modules/@types/mapbox-gl/index.d.ts" />

import User from "./User";
import Company from "./Company";
import CustomMap from "./CustomMap";

const map = new CustomMap("map");

let i;
for (i = 0; i < 100; i++) {
  map.marker(new User());
  map.marker(new Company());
}
