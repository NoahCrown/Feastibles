// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNMaSsDbg7K3DR6am_gsjiCbztPa4TBfU",
  authDomain: "feastibles.firebaseapp.com",
  projectId: "feastibles",
  storageBucket: "feastibles.appspot.com",
  messagingSenderId: "491106531266",
  appId: "1:491106531266:web:8c9435e14046a62233085b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;