// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEj6jsYVqsFz9wO7MCHLliZfa7-McHXmo",
  authDomain: "vite-contactinfo.firebaseapp.com",
  projectId: "vite-contactinfo",
  storageBucket: "vite-contactinfo.appspot.com",
  messagingSenderId: "74069363787",
  appId: "1:74069363787:web:210d5e7cf9876c5c11d1ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
