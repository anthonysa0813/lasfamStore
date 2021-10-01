import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8aT6mov_Mhl4tK2a6pApnMzoQYR3AcRw",
  authDomain: "tiendita-fd536.firebaseapp.com",
  projectId: "tiendita-fd536",
  storageBucket: "tiendita-fd536.appspot.com",
  messagingSenderId: "58142551127",
  appId: "1:58142551127:web:38874fbc02028be5dd0712",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
