// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-vfETPKbH6PJ6qXFciSPnl4UkkMIoZ9E",
  authDomain: "bail-reckoner-21671.firebaseapp.com",
  projectId: "bail-reckoner-21671",
  storageBucket: "bail-reckoner-21671.appspot.com",
  messagingSenderId: "542292398037",
  appId: "1:542292398037:web:e6014f14922eddac32b75c",
  measurementId: "G-NX9SYW1YYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
