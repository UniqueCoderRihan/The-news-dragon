// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGvzt94cAp2HTZnMigCsMNIyyuoF1HP2U",
  authDomain: "the-news-dragon-e3a4b.firebaseapp.com",
  projectId: "the-news-dragon-e3a4b",
  storageBucket: "the-news-dragon-e3a4b.appspot.com",
  messagingSenderId: "444759517394",
  appId: "1:444759517394:web:6d0df74bcdfee35487250b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;