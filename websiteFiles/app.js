import { db,getFirestore,collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, getStorage, app, ref, uploadBytes, getDownloadURL} from "../Firebase/firebase.mjs"
import { auth } from "../Firebase/firebase.mjs"
import { onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let titleInp = document.getElementById('titleInp')
let discInp = document.getElementById('discInp')
let nameInp = document.getElementById('nameInp')
let selectCategory2 = document.getElementById('selectCategory2')  // ye add post wala hai.
let selectCategory = document.getElementById('selectCategory')    // ye dashboard page wala hai.

let loginLoutBtn = document.getElementById('loginLoutBtn')
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    loginLoutBtn.innerHTML = 'Logout'
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
loginLoutBtn?.addEventListener('click',()=>{
  if(loginLoutBtn.innerHTML = 'Logout'){
    console.log('Logout Successfully! ✅')
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    }).catch((error) => {
      // An error happened.
      console.log('error');
    });
}
})


// set post details with image in Database Start //
let postnowBtn = document.querySelector('#postnowBtn')
// let chooseFile = document.getElementById('chooseFile')
// const storage = getStorage(app);

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
          blogCategory: selectCategory2.value
        });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
   
    titleInp.value = ''
    discInp.value = ''
    nameInp.value = ''
    setTimeout(() => {
     window.location.href = '../index.html'
    }, 1000);
   
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
   
   let {title,discription,name,blogCategory} = doc.data() 
  //  console.log(`${title}`,`${discription}`,`${name}`,`${blogCategory}`);
   
   showPosts.innerHTML += `
   <div class="postDiv">
            <div class="imgDiv">
               <img src="images/cc1.avif" alt="image">
           </div>
 
           <div class="titleDiv">
             <h3>${title}</h3>
           </div>
 
            <div class="discDiv">
             <p>${discription}</p>
            </div>
 
            <div class="authorDiv">
             <h3><span style="color: rgb(59, 15, 102);">Post By:</span> ${name}</h3>
             <h3><span style="color: rgb(59, 15, 102);">Category:</span> ${blogCategory}</h3>
             </div>
         </div>
   `
  })

  })
}
getBlogData()
// get Data & show post End

// selected category blogs Start
selectCategory?.addEventListener('change',()=>{
  //  console.log(selectCategory.value);
   onSnapshot(collection(db, "allPosts"), (snapshot)=>{

    showPosts.innerHTML = ''
    snapshot.forEach((doc)=>{
     let {title,discription,name,blogCategory} = doc.data() 
    //  console.log(`${title}`,`${discription}`,`${name}`,`${blogCategory}`);
     
     if(selectCategory.value == 'All Blogs' || selectCategory.value == blogCategory){
      showPosts.innerHTML += `
     <div class="postDiv">
              <div class="imgDiv">
                 <img src="images/cc1.avif" alt="image">
             </div>
   
             <div class="titleDiv">
               <h3>${title}</h3>
             </div>
   
              <div class="discDiv">
               <p>${discription}</p>
              </div>
   
              <div class="authorDiv">
               <h3><span style="color: rgb(59, 15, 102);">Post By:</span> ${name}</h3>
               <h3><span style="color: rgb(59, 15, 102);">Category:</span> ${blogCategory}</h3>
               </div>
           </div>
     `
     }
    })
  
    })
})
// selected category blogs End