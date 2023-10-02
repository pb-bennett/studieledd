import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuhuyi-IWAhbbDQYx87IwkVbS6K07iDR0",
  authDomain: "studieledd.firebaseapp.com",
  projectId: "studieledd",
  storageBucket: "studieledd.appspot.com",
  messagingSenderId: "147272146538",
  appId: "1:147272146538:web:0ae8762725ac4871e13413",
  measurementId: "G-RG9YKM2PG6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
