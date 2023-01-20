import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyCenAb682hy-kM0051BN-K8nx9gy6W6C8o",
    authDomain: "revz-e64fa.firebaseapp.com",
    projectId: "revz-e64fa",
    storageBucket: "revz-e64fa.appspot.com",
    messagingSenderId: "914252250839",
    appId: "1:914252250839:web:ad5017ef423eabdcc63a92",
    measurementId: "G-8FJ74CF9S0"
};
    
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;