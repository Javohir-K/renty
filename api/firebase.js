import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9sqT_CrgcX4vlD2W9bhyiTbvXrSQrIvQ",
  authDomain: "renty-food.firebaseapp.com",
  projectId: "renty-food",
  storageBucket: "renty-food.appspot.com",
  messagingSenderId: "55923691966",
  appId: "1:55923691966:web:c267d2d63454e5f22969ef",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = getAuth();
export { db, auth };
