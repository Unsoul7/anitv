// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3cA5-s89vd2NQmYVkkCNNOr8GLWlwTc",
  authDomain: "anitv-452dd.firebaseapp.com",
  databaseURL: "https://anitv-452dd-default-rtdb.firebaseio.com",
  projectId: "anitv-452dd",
  storageBucket: "anitv-452dd.appspot.com",
  messagingSenderId: "571239828575",
  appId: "1:571239828575:web:dd74308649e4932b1e9fea"
};



// Initialize Firebase
export const fbapp = initializeApp(firebaseConfig);