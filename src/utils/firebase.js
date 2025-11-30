// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96wnHpJMqVvdhppUZYOrjHz1BLQaPrwE",
  authDomain: "kurslarim-f8518.firebaseapp.com",
  projectId: "kurslarim-f8518",
  storageBucket: "kurslarim-f8518.firebasestorage.app",
  messagingSenderId: "730836319770",
  appId: "1:730836319770:web:eebcedbc861fedfff3dba3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const DB = getFirestore();
const AUTH = getAuth();

export {DB,AUTH}