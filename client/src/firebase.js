// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e1ce0.firebaseapp.com",
  projectId: "mern-estate-e1ce0",
  storageBucket: "mern-estate-e1ce0.appspot.com",
  messagingSenderId: "495147183104",
  appId: "1:495147183104:web:b432aec986bc61c608bce5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);