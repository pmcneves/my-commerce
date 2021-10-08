import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAxMMOCQQeIBI2bQS7BLJOyaTNAL09DwiU",
  authDomain: "my-commerce-6c318.firebaseapp.com",
  projectId: "my-commerce-6c318",
  storageBucket: "my-commerce-6c318.appspot.com",
  messagingSenderId: "903410532006",
  appId: "1:903410532006:web:fb2379764e1cd7d82fbe67",
};


const app = () =>
!firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();
app();

export const auth = getAuth();