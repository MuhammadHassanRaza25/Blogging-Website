import { db,getFirestore,collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, getStorage, app, ref, uploadBytes, getDownloadURL} from "../Firebase/firebase.mjs"
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../Firebase/firebase.mjs"


//dashbaord page varibales
let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let titleInp = document.getElementById('titleInp')
let discInp = document.getElementById('discInp')
let nameInp = document.getElementById('nameInp')


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

// set post details with image in Database Start //
let postnowBtn = document.querySelector('#postnowBtn')
let chooseFile = document.getElementById('chooseFile')
const storage = getStorage(app);

postnowBtn?.addEventListener('click', async ()=>{
    // // get image 
    // // console.log(chooseFile.files[0]);

    // const storageRef = ref(storage, chooseFile.files[0].name);  // yahan images ki jaga kuch name set kar sakte hain lekin name lazmi set karna hai.

    // //upload file to the storage start     
    //   uploadBytes(storageRef, chooseFile.files[0]) //uploadBytes apne sysytem se cloud ke uper file upload karne ke liye use hoya hai.
    //   .then((snapshot) => {   
    //     console.log('Uploaded a blob or file!');
    //     getDownloadURL(ref(storageRef))    //getDownloadURL jahan hamari file save hai waha se link/url lene ke liye use hota hai.
    //       .then((url) => {
    //         console.log("url ==>", url);
    //          var dURL = url 
    //          return dURL
    //       })
    //       .catch((err) => console.log('Error'))
    //     })
    //      .catch((err) => console.log(err))
    //   //upload file to the storage end

     try {
        const docRef = await addDoc(collection(db, "allPosts"), {
          title: titleInp.value,
          discription: discInp.value,
          name: nameInp.value,
        });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
   
    titleInp.value = ''
    discInp.value = ''
    nameInp.value = ''

     console.log('Running !');

})
// set post details with image in Database End //

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