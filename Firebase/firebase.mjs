import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from  "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
const firebaseConfig = {
   apiKey: "AIzaSyCeP9LOeSlGNm-PL1nEEGDyha5VfZt2SfM",
   authDomain: "blogging-website-ec987.firebaseapp.com",
   projectId: "blogging-website-ec987",
   storageBucket: "blogging-website-ec987.appspot.com",
   messagingSenderId: "382059701803",
   appId: "1:382059701803:web:4fcbfa60b1f8d85da02c6e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export{
    app,
    auth
 }

 
// firestore start
 import { getFirestore } from  "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot} from  "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 
 const db = getFirestore(app);

 export{
   app,
   db,
   getFirestore,
   collection, 
   addDoc, 
   getDocs, 
   doc, 
   updateDoc, 
   deleteDoc, 
   onSnapshot
 }