// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8WPd6ix2ul3Xjx1LXvK45KRkspPrUaeo",
  authDomain: "eatables.firebaseapp.com",
  projectId: "eatables",
  storageBucket: "eatables.appspot.com",
  messagingSenderId: "178084721822",
  appId: "1:178084721822:web:82eb09aa89f7e50182f78f",
  measurementId: "G-68Q08GT8HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);