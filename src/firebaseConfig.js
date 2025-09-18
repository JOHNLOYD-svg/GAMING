// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmhCZYGR04UpFzO8yUXQtATASQyjzs1sc",
  authDomain: "gaming-fcf9a.firebaseapp.com",
  projectId: "gaming-fcf9a",
  storageBucket: "gaming-fcf9a.firebasestorage.app",
  messagingSenderId: "208712843986",
  appId: "1:208712843986:web:7620ef5454c3df7594630b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
