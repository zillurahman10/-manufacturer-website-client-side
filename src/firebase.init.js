import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA6tlFgBYeA1--xYJgAk6BJeGKsvpflQc",
    authDomain: "assignment12-zr.firebaseapp.com",
    projectId: "assignment12-zr",
    storageBucket: "assignment12-zr.appspot.com",
    messagingSenderId: "1046627305081",
    appId: "1:1046627305081:web:18cd58af333509a082b6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;