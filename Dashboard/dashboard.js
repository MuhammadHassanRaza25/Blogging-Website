import { db,getFirestore,collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot} from "../Firebase/firebase.mjs"
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../Firebase/firebase.mjs"



//dashbaord page varibales
let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let titleInp = document.getElementById('titleInp')
let discInp = document.getElementById('discInp')
let nameInp = document.getElementById('nameInp')
let showPosts = document.getElementById('showPosts')
// let chooseFile = document.getElementById('chooseFile')

// Logout User Start
// let signoutBtn = document.getElementById('signoutBtn')
// signoutBtn.addEventListener('click',()=>{
// signOut(auth).then(() => {
//     // Sign-out successful.
//     console.log('Sign-out successful');
//     window.location.href = '../index.html'
//   }).catch((error) => {
//     // An error happened.
//     console.log('error');
//   });
// })
// Logout User End

// post details Start
let postnowBtn = document.querySelector('#postnowBtn')
postnowBtn.addEventListener('click',async ()=>{
    try {
        const docRef = await addDoc(collection(db, "allPosts"), {
          title: titleInp.value,
          discription: discInp.value,
          name: nameInp.value
        });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
      console.log('Running !');
})

// post details End

// show post Start

// show post End