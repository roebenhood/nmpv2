import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBuBzfMOCVB3SvcFJ8IoyPZg076EXKDeB0",
    authDomain: "museum-26423.firebaseapp.com",
    databaseURL: "https://museum-26423.firebaseio.com",
    projectId: "museum-26423",
    storageBucket: "museum-26423.appspot.com",
    messagingSenderId: "697476361268",
    appId: "1:697476361268:web:36e6bedd3d2d6d16976e61"
    // apiKey: "AIzaSyDttJSqtO5ZrEEwKtvC-TECq5hVG26x5Ps",
    // authDomain: "npm2020-2c3af.firebaseapp.com",
    // databaseURL: "https://npm2020-2c3af.firebaseio.com",
    // projectId: "npm2020-2c3af",
    // storageBucket: "npm2020-2c3af.appspot.com",
    // messagingSenderId: "1034176466445",
    // appId: "1:1034176466445:web:21c40cbe2d0538dff0cf44"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();
  let firebaseDb = firebaseApp.firestore();

  export { firebaseAuth, firebaseDb }
