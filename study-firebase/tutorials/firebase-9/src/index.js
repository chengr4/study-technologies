import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

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

// collection ref
const colRef = collection(db, "books");

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
onSnapshot(colRef, (snapshot) => {
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
