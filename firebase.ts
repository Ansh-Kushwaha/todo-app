import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5f_u8MSdseqCbjuV0igbiMjKp1x6ltYE",
  authDomain: "todo-app-nextjs13.firebaseapp.com",
  projectId: "todo-app-nextjs13",
  storageBucket: "todo-app-nextjs13.appspot.com",
  messagingSenderId: "332590901623",
  appId: "1:332590901623:web:d9de061ddd0858f8b11972",
  measurementId: "G-FXVH0V093H"
};

// Initialize Firebase
const app = getApp.length ? getApp() : initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database }