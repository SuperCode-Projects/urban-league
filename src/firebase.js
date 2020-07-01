import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMoLCVCnabGWsYqJdjRMD1Ws9rl43iVIg",
    authDomain: "myurbanleague.firebaseapp.com",
    databaseURL: "https://myurbanleague.firebaseio.com",
    projectId: "myurbanleague",
    storageBucket: "myurbanleague.appspot.com",
    messagingSenderId: "890562485068",
    appId: "1:890562485068:web:d6cc5e725411366a17cde9",
    measurementId: "G-945H7V9XE0"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();