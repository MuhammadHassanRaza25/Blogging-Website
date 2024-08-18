import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../Firebase/firebase.mjs"

let loginEmail = document.getElementById('loginEmail')
let loginPass = document.getElementById('loginPass')
let loginBtn = document.getElementById('loginBtn')
let signupName = document.getElementById('signupName')
let signupEmail = document.getElementById('signupEmail')
let signupPass = document.getElementById('signupPass')
let signupBtn = document.getElementById('signupBtn')


// Signup New User Start
signupBtn?.addEventListener('click',()=>{
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    Swal.fire({
        title: "Good job!",
        text: "SignUp Successfully!",
        icon: "success"
      });
      signupName.value = ''
      signupEmail.value = ''
      signupPass.value = ''
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);     //errorCode kuch errors firebase ki taraf se ate hain jo user ko dikhte hain. un errors pe if/else lagai hai.
    if(errorCode == 'auth/email-already-in-use'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Email Is Already In Use!",
          });
    }
    else if(errorCode == 'auth/weak-password'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your password must be atleast 6 characters",
          });
    }
    else if(errorCode == 'auth/invalid-email'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
          });
    }
    else if(errorCode == 'auth/missing-password'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password is missing!",
          });
    }
    // ..
  });
})
// Signup New User End


// Login User Start
loginBtn?.addEventListener('click',()=>{
    signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = '../index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if (errorCode == 'auth/missing-password') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password is missing!",
        });
    }
    else if (errorCode == 'auth/invalid-email') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
          });
    }
    else if (errorCode == 'auth/invalid-credential') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Password",
        });
    }
  });
})
// Login User End
