// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIlqA7_0a-UIhfpH--yHQ1vzy5Jkbban4",
  authDomain: "omegadl2.firebaseapp.com",
  projectId: "omegadl2",
  storageBucket: "omegadl2.appspot.com",
  messagingSenderId: "433737152396",
  appId: "1:433737152396:web:55adde6d653ce8586808a9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = firebase.firestore(app);