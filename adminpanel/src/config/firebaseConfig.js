// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXScmhct4TDNteX1DP3FasEQLdTeHKuvg",
  authDomain: "fast-track-ed5ef.firebaseapp.com",
  projectId: "fast-track-ed5ef",
  storageBucket: "fast-track-ed5ef.firebasestorage.app",
  messagingSenderId: "607599112153",
  appId: "1:607599112153:web:b97a3e30cef5e3948673c8"
};
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
