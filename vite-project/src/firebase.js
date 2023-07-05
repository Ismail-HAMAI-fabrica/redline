// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5HMLnkiGXwBKZv5VDSw7Qcy_4XTNFS0c",
  authDomain: "tamecook-95926.firebaseapp.com",
  databaseURL: "https://tamecook-95926-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tamecook-95926",
  storageBucket: "tamecook-95926.appspot.com",
  messagingSenderId: "1075493892638",
  appId: "1:1075493892638:web:d3a2acdea9a6425e82f40f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)