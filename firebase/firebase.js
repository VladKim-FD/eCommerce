// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSm8wlBTGOuMLzIC0KcA1qiZniXlUVHis",
  authDomain: "ecommerce-c52e9.firebaseapp.com",
  projectId: "ecommerce-c52e9",
  storageBucket: "ecommerce-c52e9.appspot.com",
  messagingSenderId: "49711536652",
  appId: "1:49711536652:web:9a0e0df10f510bb63b2c29",
  measurementId: "G-YBBJN001E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);