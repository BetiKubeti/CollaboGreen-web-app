// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-5CRus4vUyr9i_rdwYI6u7AC4LtvUW3M",
    authDomain: "collabogreen-3060a.firebaseapp.com",
    projectId: "collabogreen-3060a",
    storageBucket: "collabogreen-3060a.appspot.com",
    messagingSenderId: "273902362972",
    appId: "1:273902362972:web:8f8ac19268fd326ebea199",
    measurementId: "G-V5EWS035CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore }