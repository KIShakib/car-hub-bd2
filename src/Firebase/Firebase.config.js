// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwt2tXrqFyTkIOJhEVKL1uLbG7OLgCTrQ",
  authDomain: "car-hub-bd-d8f25.firebaseapp.com",
  projectId: "car-hub-bd-d8f25",
  storageBucket: "car-hub-bd-d8f25.appspot.com",
  messagingSenderId: "764939666761",
  appId: "1:764939666761:web:25a797cd551818a1a98698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;