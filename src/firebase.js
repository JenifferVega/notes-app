// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2EfBm57NTALixYIzzigXqgRyhBDqbLSk",
  authDomain: "notes-app-e3514.firebaseapp.com",
  projectId: "notes-app-e3514",
  storageBucket: "notes-app-e3514.appspot.com",
  messagingSenderId: "412693574341",
  appId: "1:412693574341:web:a47336cb29fbd765cf36ac",
  measurementId: "G-QB0VXSFMJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);
//const analytics = getAnalytics(app);
const db = getFirestore();
export{ db };