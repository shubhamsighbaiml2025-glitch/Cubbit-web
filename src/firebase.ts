import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW2kKPa26TodQlf1y3o9EybwMsmI4PAE0",
  authDomain: "reddit-64309.firebaseapp.com",
  projectId: "reddit-64309",
  storageBucket: "reddit-64309.firebasestorage.app",
  messagingSenderId: "23037860712",
  appId: "1:23037860712:web:4870ac095a8822688e54dd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
