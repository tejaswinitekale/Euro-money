// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
 
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmsIBrhefDlgNNIlOreyMQSBhQW7dD9w0",
  authDomain: "euro-money-aaa94.firebaseapp.com",
  projectId: "euro-money-aaa94",
  storageBucket: "euro-money-aaa94.appspot.com",
  messagingSenderId: "265324535730",
  appId: "1:265324535730:web:56dcb70cb97722ce4cceab"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app)
const db = getFirestore(app);


export  { app, projectAuth, db}
