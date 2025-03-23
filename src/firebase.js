// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzcL1RGyIzf71sAJSzR7nz320W99NJNiU",
  authDomain: "leaf-analyser.firebaseapp.com",
  projectId: "leaf-analyser",
  storageBucket: "leaf-analyser.firebasestorage.app",
  messagingSenderId: "706347850139",
  appId: "1:706347850139:web:152f83d6b204cd1656693e",
  measurementId: "G-K593PG2JTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;