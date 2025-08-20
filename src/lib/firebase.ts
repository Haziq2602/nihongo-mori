
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
