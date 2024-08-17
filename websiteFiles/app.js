import { db,getFirestore,collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot} from "../Firebase/firebase.mjs"
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../Firebase/firebase.mjs"


//dashbaord page varibales
let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let titleInp = document.getElementById('titleInp')
let discInp = document.getElementById('discInp')
let nameInp = document.getElementById('nameInp')
// let chooseFile = document.getElementById('chooseFile')

// Logout User Start
// let loginSignBtn = document.getElementById('loginSignBtn')
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

// set post details in Database Start
let postnowBtn = document.querySelector('#postnowBtn')
postnowBtn?.addEventListener('click', async ()=>{
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

    titleInp.value = ''
    discInp.value = ''
    nameInp.value = ''
})
// set post details in Database End

// get Data & show post Start
let showPosts = document.getElementById('showPosts')
let getBlogData = async ()=>{
  onSnapshot(collection(db, "allPosts"), (snapshot)=>{

  showPosts.innerHTML = ''
  snapshot.forEach((doc)=>{
    // console.log("DATA ==>",doc.id, doc.data()); 
    // console.log(`${title}`,`${discription}`,`${name}`);
   let {title,discription,name} = doc.data()
   showPosts.innerHTML += `
   <div class="postDiv">
            <div class="imgDiv">
               <img src="" alt="image">
           </div>
 
           <div class="titleDiv">
             <h3>${title}</h3>
           </div>
 
            <div class="discDiv">
             <p>${discription}</p>
            </div>
 
            <div class="authorDiv">
             <h3><span style="color: rgb(59, 15, 102);">Post By:</span> ${name}</h3>
            </div>
         </div>
   `
  })

  })
}
getBlogData()

// get Data & show post End