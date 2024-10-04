import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Website from "./Website";
import "./output.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1fGQdV5vWorl4-CAUhNgxCfcSo8AP2iE",
  authDomain: "harrypersonalwebsite.firebaseapp.com",
  projectId: "harrypersonalwebsite",
  storageBucket: "harrypersonalwebsite.appspot.com",
  messagingSenderId: "1098967893260",
  appId: "1:1098967893260:web:4b403393d0134e02727529",
  measurementId: "G-R1NLVZ5BHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Render your app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
);
