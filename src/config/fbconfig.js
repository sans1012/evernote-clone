import firebase from "firebase"
import "firebase/firestore";


var firebaseConfig = {
      apiKey: "AIzaSyBkl5I2629Dxs4q6JCkotbX5OU30m9mIMI",
      authDomain: "evernote-d40ef.firebaseapp.com",
      projectId: "evernote-d40ef",
      storageBucket: "evernote-d40ef.appspot.com",
      messagingSenderId: "840753987102",
      appId: "1:840753987102:web:eb901eac47f2a853b1f80f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase