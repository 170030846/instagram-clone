import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOp1Nrk7_G3leS-bglkp_jOL0ZbtEvuCs",
  authDomain: "instagram-clone-29acd.firebaseapp.com",
  databaseURL: "https://instagram-clone-29acd.firebaseio.com",
  projectId: "instagram-clone-29acd",
  storageBucket: "instagram-clone-29acd.appspot.com",
  messagingSenderId: "464515497806",
  appId: "1:464515497806:web:d9be0b4364b64a95cf281f",
  measurementId: "G-N4VQZ7B74V",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
