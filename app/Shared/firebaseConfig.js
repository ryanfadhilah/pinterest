// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // env
    apiKey: "AIzaSyCAT4cm2GfFC_eQJ8r-jGGBNPn9QnjAEp8",
    authDomain: "pinterest-clone-394010.firebaseapp.com",
    projectId: "pinterest-clone-394010",
    storageBucket: "pinterest-clone-394010.appspot.com",
    messagingSenderId: "224398146159",
    appId: "1:224398146159:web:a1c5c97b911a57e2892b9a",
    measurementId: "G-30WK1BXSE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;