// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRN0byOfMZpljs0tSTHXborVJZTP51MHY",
  authDomain: "vue-auth-1-87782.firebaseapp.com",
  projectId: "vue-auth-1-87782",
  storageBucket: "vue-auth-1-87782.appspot.com",
  messagingSenderId: "453667207174",
  appId: "1:453667207174:web:735c6398b10ea965012b87"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth()
export { auth }