import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "mychat-3581c.firebaseapp.com",
    projectId: "mychat-3581c",
    storageBucket: "mychat-3581c.appspot.com",
    messagingSenderId: "823315705795",
    appId: process.env.REACT_APP_FIREBASE_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
