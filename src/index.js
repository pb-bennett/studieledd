import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import * as L from "leaflet";
import "leaflet.markercluster";

//// FIREBASE
// const firebaseConfig = {
//   apiKey: "AIzaSyCuhuyi-IWAhbbDQYx87IwkVbS6K07iDR0",
//   authDomain: "studieledd.firebaseapp.com",
//   projectId: "studieledd",
//   storageBucket: "studieledd.appspot.com",
//   messagingSenderId: "147272146538",
//   appId: "1:147272146538:web:0ae8762725ac4871e13413",
//   measurementId: "G-RG9YKM2PG6",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const collectionRef = collection(db, "users");

// getDocs(collectionRef).then((snapshot) => {
//   let users = [];
//   snapshot.docs.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
//   console.log(users);
// });
////////////
//////  LEAFLET

// Initialise the map

const map = L.map("map").setView([59.13131, 10.216595], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "'https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" }).addTo(map);

// add markers

const myClusterLayer = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: "<div class='cluster-div'>" + cluster.getChildCount() + "</div>",
    });
  },
});

const marker1 = L.marker([59.13131, 10.216595]);
const marker2 = L.marker([59.14121, 10.216695]);
const marker3 = L.marker([59.12531, 10.207595]);
const marker4 = L.marker([59.22531, 10.307595]);

myClusterLayer.addLayer(marker1);
myClusterLayer.addLayer(marker2);
myClusterLayer.addLayer(marker3);
myClusterLayer.addLayer(marker4);

map.addLayer(myClusterLayer);
