// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "a-real-estate-e8995.firebaseapp.com",
  projectId: "a-real-estate-e8995",
  storageBucket: "a-real-estate-e8995.appspot.com",
  messagingSenderId: "793959785965",
  appId: "1:793959785965:web:68299959b5fb2ec8f533e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);