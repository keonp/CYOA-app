// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyB_8r8gFQaLr0MtzadNrT52AhaM-PV60",
  authDomain: "project-3-80d5f.firebaseapp.com",
  databaseURL: "https://project-3-80d5f-default-rtdb.firebaseio.com",
  projectId: "project-3-80d5f",
  storageBucket: "project-3-80d5f.appspot.com",
  messagingSenderId: "306981748380",
  appId: "1:306981748380:web:165b5e2220968ae1123759"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;