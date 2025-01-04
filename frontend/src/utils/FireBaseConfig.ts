// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqFDD8aYtT_VEhBLdZtJxLlTPnMcxGTI0",
  authDomain: "echohub-a717a.firebaseapp.com",
  projectId: "echohub-a717a",
  storageBucket: "echohub-a717a.firebasestorage.app",
  messagingSenderId: "26017034169",
  appId: "1:26017034169:web:13e9398cccd3d51960d068",
  measurementId: "G-KSWCW4691M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users")