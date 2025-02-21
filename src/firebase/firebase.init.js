// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASY2OJ1GOnhCOxV-gZh-K7lAfrKW4H25Q",
  authDomain: "scic-auth.firebaseapp.com",
  projectId: "scic-auth",
  storageBucket: "scic-auth.firebasestorage.app",
  messagingSenderId: "52735267824",
  appId: "1:52735267824:web:23f29d28421a8f0fd9c335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;