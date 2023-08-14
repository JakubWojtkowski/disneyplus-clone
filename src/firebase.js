// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1yctiNqq4Ws84BnYaiepG47GvyPSRXhA",
  authDomain: "disney-plus-clone-2df29.firebaseapp.com",
  databaseURL:
    "https://disney-plus-clone-2df29-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "disney-plus-clone-2df29",
  storageBucket: "disney-plus-clone-2df29.appspot.com",
  messagingSenderId: "1015550415851",
  appId: "1:1015550415851:web:d5aa48ab2f680eef2c3fae",
  measurementId: "G-1XNWNPH2D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
