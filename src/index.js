import { getDocs } from "firebase/firestore";

import * as L from "leaflet";
import "leaflet.markercluster";

import { app, db, collectionRef } from "./modules/firestore";

let users = [];
let userArray = [];
getDocs(collectionRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
  console.log(users);
  updateMap();
});
////////////
//////  LEAFLET

// Initialise the map

const map = L.map("map").setView([59.13131, 10.216595], 5);

L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}", {
  minZoom: 0,
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: "png",
}).addTo(map);

const markers = L.markerClusterGroup();
const updateMap = () => {
  map.removeLayer(markers);
  userArray = users.map((user) => {
    // const tooltipHTML = `
    // <div class="tooltip-container">
    //   <p class="tooltip-name">Paul</p>
    //   <p class="tooltip-course">AUG-23-FT</p>
    // </div>`;
    return {
      marker: L.marker([user.geolocation.coordinates._lat, user.geolocation.coordinates._long]).bindPopup(`
      <div class="tooltip-container">
        <div class="tooltip-name">${`${user.firstName} ${user.lastName}`}</div>
        <div class="tooltip-course">${user.course}</div>
        <div class="tooltip-location">${user.geolocation.location}</div>

      </div>`),
      ...user,
    };
  });
  userArray.forEach((user) => {
    markers.addLayer(user.marker);
  });
  console.log(userArray);
  map.addLayer(markers);
};

// const marker1 = L.marker([59.13131, 10.216595]);
// const marker2 = L.marker([59.14121, 10.216695]);
// const marker3 = L.marker([59.12531, 10.207595]);
// const marker4 = L.marker([59.22531, 10.307595]);
// markers.addLayer(marker1);
// markers.addLayer(marker2);
// markers.addLayer(marker3);
// markers.addLayer(marker4);

// map.addLayer(markers);

// myClusterLayer.addLayer(marker1);
// myClusterLayer.addLayer(marker2);
// myClusterLayer.addLayer(marker3);
// myClusterLayer.addLayer(marker4);

// map.addLayer(markers);
