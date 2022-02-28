import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where,
  order,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFk-rr-s2Ggr4IfHEYtJEyP2HEP9z2WkA",
  authDomain: "fir-9-a217a.firebaseapp.com",
  projectId: "fir-9-a217a",
  storageBucket: "fir-9-a217a.appspot.com",
  messagingSenderId: "362581441658",
  appId: "1:362581441658:web:eb95b1423c9ddd6275cfc3",
  measurementId: "G-QB2KKTQQSR",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "books");

// queries
// get documents from the particular collection
// const q = query(colRef, where("author", "==", "Harry"), orderBy('title', "desc"));
const q = query(colRef, orderBy("createdAt"));

// // get collection data
// getDocs(colRef).then((snapshot) => {
//   const books = [];
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id});
//   });
//   console.log(books);
// }).catch(err=>{
//   console.log(err.message);
// });

// get collection data in realtime
const unsubCollection = onSnapshot(q, (snapshot) => {
  const books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  // do not refresh the page
  e.preventDefault();

  // firestore addDoc
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    // reset form
    addBookForm.reset();
  });
});

// deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  // do not refresh the page
  e.preventDefault();

  // get doc ref (target to delete)
  const docRef = doc(db, "books", deleteBookForm.id.value);

  // firestore deleteDoc
  deleteDoc(docRef).then(() => {
    // reset form
    deleteBookForm.reset();
  });
});

// updating documents
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. get reference
  const docRef = doc(db, "books", updateForm.id.value);
  // 2. update the document
  updateDoc(docRef, {
    title: "updated title",
  }).then(() => {
    updateForm.reset();
  });
});

// get a single document
const singleDocRef = doc(db, "books", "wTq17ptRjwlrRWPEBsgX");

getDoc(singleDocRef).then((doc) => {
  console.log(doc.data(), doc.id);
});

// signing users up
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm.email.value
  const password = signupForm.password.value
  createUserWithEmailAndPassword(auth, email, password).then((credential)=>{
    console.log(credential.user);
    signupForm.reset();
  }).catch(err=>{
    console.error(err.message);
  });
});

// login
const loginForm = document.querySelector(".login");
loginForm.addEventListener('submit', e=> {
  e.preventDefault();

  const email = loginForm.email.value
  const password = loginForm.password.value
  signInWithEmailAndPassword(auth, email, password).then();
});

// logout
const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', ()=> {
  signOut(auth).then(()=> {
    console.log('the user signed out');
  });
})

// subscribing to auth changes
/**
 * Change everytime when users login, logout, ...
 */
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('state changed', user);
});

// unsub 1. auth changes 2. snapshot
const unsubButton = document.querySelector('.unsub');

unsubButton.addEventListener('click', ()=> {
  signOut(auth).then(()=> {
    console.log('unsub');
    unsubAuth();
    unsubCollection();
  });
})
