const fs = require("fs");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

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

const collectionRef = collection(db, "users");

getDocs(collectionRef).then((snapshot) => {
  let users = [];
  snapshot.docs.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
  // console.log(users);
  // const usersJson = JSON.stringify(users);
  // fs.writeFile("dummyData.json", usersJson, "utf-8", () => console.log("written"));
  // console.log(usersJson);
});
