// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkSg_7Xlx6JA5-fMcDPX7rb5Vo8Yet1nA",
  authDomain: "e-clone-9e6d2.firebaseapp.com",
  projectId: "e-clone-9e6d2",
  storageBucket: "e-clone-9e6d2.appspot.com",
  messagingSenderId: "286686700534",
  appId: "1:286686700534:web:efab059494736c4571ddd7",
  measurementId: "G-5PCWTDD4L9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// // initiallize app
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }
