// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZ8Kykp5y0e60Aght6qxxebNfSnTdNJQ",
  authDomain: "realtor-react-practice.firebaseapp.com",
  projectId: "realtor-react-practice",
  storageBucket: "realtor-react-practice.appspot.com",
  messagingSenderId: "843425308049",
  appId: "1:843425308049:web:10ee1b1c310e9990104e30"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();
