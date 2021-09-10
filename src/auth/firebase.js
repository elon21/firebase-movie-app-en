import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDtMP3QoeCUx6dYI8MfrLZh01e9HC4iN4",
    authDomain: "react-movie-app-699c7.firebaseapp.com",
    projectId: "react-movie-app-699c7",
    storageBucket: "react-movie-app-699c7.appspot.com",
    messagingSenderId: "551495615781",
    appId: "1:551495615781:web:246a3d97b46e698572c6cc"
  });

export const createUser = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log('REGISTER user', user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

export const SignIn = async (email, password) => {
   await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('SIGNIN user', user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

export const userObserver = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('OBSERVER: ', user)
        } else {
          // User is signed out
          // ...
        }
      });
}



export default firebaseApp;
