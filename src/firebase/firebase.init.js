// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnR-lFV7Id_O_hiyga6_pvtY443IdwKmg",
  authDomain: "dragon-news-portal-b3c2f.firebaseapp.com",
  projectId: "dragon-news-portal-b3c2f",
  storageBucket: "dragon-news-portal-b3c2f.firebasestorage.app",
  messagingSenderId: "34200202753",
  appId: "1:34200202753:web:9fb98d792f1bd2e8c35a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);