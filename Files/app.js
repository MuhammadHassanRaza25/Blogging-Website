import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../Firebase/firebase.mjs"

// let loginEmail = document.getElementById('loginEmail')
// let loginPass = document.getElementById('loginPass')
// let loginBtn = document.getElementById('loginBtn')
// let signupName = document.getElementById('signupName')
// let signupEmail = document.getElementById('signupEmail')
// let signupPass = document.getElementById('signupPass')
// let signupBtn = document.getElementById('signupBtn')

//dashbaord page varibales
let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let signoutBtn = document.getElementById('signoutBtn')