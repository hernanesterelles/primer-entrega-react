// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"
import { getAuth , GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwPy_jUVxJs3EK6Ectl5fT_15rSj6V688",
  authDomain: "rj-tohe.firebaseapp.com",
  projectId: "rj-tohe",
  storageBucket: "rj-tohe.appspot.com",
  messagingSenderId: "690038236819",
  appId: "1:690038236819:web:1680bdee1e784a92f28f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
 export const auth = getAuth(app)
 export const provider= new GoogleAuthProvider()