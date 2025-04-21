// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_3hR_WLDsavbhEQkx21KsIsbjscqjX4",
  authDomain: "book-store-mern-app-cbaa0.firebaseapp.com",
  projectId: "book-store-mern-app-cbaa0",
  storageBucket: "book-store-mern-app-cbaa0.firebasestorage.app",
  messagingSenderId: "10130050841",
  appId: "1:10130050841:web:e38d0556408da99644ff88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);