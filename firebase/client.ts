// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCykBCPnkgYNdjrZGDj3Pv0CysUXsFx6bM",
  authDomain: "prepwise-2487e.firebaseapp.com",
  projectId: "prepwise-2487e",
  storageBucket: "prepwise-2487e.firebasestorage.app",
  messagingSenderId: "351016769113",
  appId: "1:351016769113:web:37ae7ba9f63cbba5a80348",
  measurementId: "G-SWF7TMNE9S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);