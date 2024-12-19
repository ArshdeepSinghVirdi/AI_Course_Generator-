// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-c396e.firebaseapp.com",
  projectId: "ai-course-generator-c396e",
  storageBucket: "ai-course-generator-c396e.firebasestorage.app",
  messagingSenderId: "421283077544",
  appId: "1:421283077544:web:e8d560c6b75d2e266b919d",
  measurementId: "G-1ZL7LY9LY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)