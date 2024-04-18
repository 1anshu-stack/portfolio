// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA8QLiD9qtycPndJceiD5pwSLPRwJhPbU",
  authDomain: "react-portfolio-anshu.firebaseapp.com",
  projectId: "react-portfolio-anshu",
  storageBucket: "react-portfolio-anshu.appspot.com",
  messagingSenderId: "150866483150",
  appId: "1:150866483150:web:88fc54af15d9e026b67d9f",
  measurementId: "G-JRWBD8VV6F"
};

export const app = initializeApp(firebaseConfig);
export const db = getAnalytics();