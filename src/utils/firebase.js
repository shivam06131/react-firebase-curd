import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjng5xI7ZnpMgRUE62eL06pB_F4OvDVn4",
  authDomain: "react-crud-fbfdf.firebaseapp.com",
  databaseURL: "https://react-crud-fbfdf-default-rtdb.firebaseio.com",
  projectId: "react-crud-fbfdf",
  storageBucket: "react-crud-fbfdf.appspot.com",
  messagingSenderId: "38669734587",
  appId: "1:38669734587:web:7a4ef4c14170744a7f0f9e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
