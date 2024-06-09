import { getStorage } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2w1s42XVIKnSanb9jZ08NxFbLY8yCDb0",
  authDomain: "paf-fitness-center.firebaseapp.com",
  projectId: "paf-fitness-center",
  storageBucket: "paf-fitness-center.appspot.com",
  messagingSenderId: "337774210258",
  appId: "1:337774210258:web:6670e61fde96cc2636d10b",
  measurementId: "G-LQ1Z5JEMGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;