// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9qngyB6qIgBAenjRkR5uRonwU09TWRo",
  authDomain: "firm-form.firebaseapp.com",
  projectId: "firm-form",
  storageBucket: "firm-form.appspot.com",
  messagingSenderId: "513188585236",
  appId: "1:513188585236:web:b009006149b8362a476c01",
  measurementId: "G-33PFKTQNV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth