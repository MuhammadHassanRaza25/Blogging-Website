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