// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "kana-compass-kbogq",
  appId: "1:1035086297838:web:6fc9a013d2f2dfbf8a91ff",
  storageBucket: "kana-compass-kbogq.firebasestorage.app",
  apiKey: "AIzaSyDc1EDH8cmSshaaz13JaWpYdu_hZKu63Ek",
  authDomain: "kana-compass-kbogq.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "1035086297838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
