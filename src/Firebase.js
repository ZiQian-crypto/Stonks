<<<<<<< HEAD:src/Firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdJ7RH-LgjNoXRRIvj2Xg_seorLK4QBss",
    authDomain: "stonks-d9988.firebaseapp.com",
    databaseURL: "https://stonks-d9988.firebaseio.com",
    projectId: "stonks-d9988",
    storageBucket: "stonks-d9988.appspot.com",
    messagingSenderId: "181721112658",
    appId: "1:181721112658:web:5b817e2f7857143c983f8b",
    measurementId: "G-KDKCE860QP"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
=======
>>>>>>> parent of ccc74b5... Added firebase dependecy + firebase.js modifications:src/Components/Firebase.js
