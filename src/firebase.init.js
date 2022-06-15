// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Yggneqs9yLc6JtnUShdORX-e2kIxWNM",
  authDomain: "aptcoder-f8190.firebaseapp.com",
  projectId: "aptcoder-f8190",
  storageBucket: "aptcoder-f8190.appspot.com",
  messagingSenderId: "187655215127",
  appId: "1:187655215127:web:017e7abc76262cdeaca452",
  measurementId: "G-68X1RPDJFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
