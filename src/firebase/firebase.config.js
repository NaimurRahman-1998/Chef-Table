// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS-QgIRjUE5jtNyhtBppXXkBlJWS75Vbs",
    authDomain: "chefs-table-client.firebaseapp.com",
    projectId: "chefs-table-client",
    storageBucket: "chefs-table-client.appspot.com",
    messagingSenderId: "30917449945",
    appId: "1:30917449945:web:4d978fc746830416d1c6c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app