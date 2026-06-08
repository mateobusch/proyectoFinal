import app from "firebase/app";
import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk0nMQ6mmNMS_vDMAQUzb8l5WnpkGHFDY",
  authDomain: "proyecto-final-acdc7.firebaseapp.com",
  projectId: "proyecto-final-acdc7",
  storageBucket: "proyecto-final-acdc7.firebasestorage.app",
  messagingSenderId: "727118474710",
  appId: "1:727118474710:web:c5b38fb0fafce6f6ee8877"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();