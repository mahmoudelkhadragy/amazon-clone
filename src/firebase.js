import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiwWnyDtiHMvoq3z7ndd46BPuKQaTFBzw",
  authDomain: "clone-1c51d.firebaseapp.com",
  databaseURL: "https://clone-1c51d.firebaseio.com",
  projectId: "clone-1c51d",
  storageBucket: "clone-1c51d.appspot.com",
  messagingSenderId: "2969359527",
  appId: "1:2969359527:web:afa86ba068b3111a8ab782",
  measurementId: "G-FFCZ2FJE3C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
