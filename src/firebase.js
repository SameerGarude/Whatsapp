import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxIbsVm1X6kMEfFRE_H-_QRWfgMPZrJw0",
  authDomain: "chat-97130.firebaseapp.com",
  projectId: "chat-97130",
  storageBucket: "chat-97130.appspot.com",
  messagingSenderId: "342382616681",
  appId: "1:342382616681:web:3730135388c21fa00f42f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
