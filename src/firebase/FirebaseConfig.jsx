// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz8ChxqGea05A4Eyj9qPIEt3QZ95e2hfo",
    authDomain: "pink-basket.firebaseapp.com",
    projectId: "pink-basket",
    storageBucket: "pink-basket.appspot.com",
    messagingSenderId: "77063356613",
    appId: "1:77063356613:web:9cd9c574a81c3da07470ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }