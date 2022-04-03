import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoiAZyetunAJGfliEdMYPYNLKFuHi9KeY",
  authDomain: "alx-firebase-chat-jerzyk.firebaseapp.com",
  projectId: "alx-firebase-chat-jerzyk",
  storageBucket: "alx-firebase-chat-jerzyk.appspot.com",
  messagingSenderId: "441567251931",
  appId: "1:441567251931:web:6fea9603527e079e472bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getDatabase(app);