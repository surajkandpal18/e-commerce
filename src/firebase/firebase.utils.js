import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3lJP9UVhAC4tLmqxWHekuLo79tkSlu-Y",
  authDomain: "crown-db-f9624.firebaseapp.com",
  databaseURL: "https://crown-db-f9624.firebaseio.com",
  projectId: "crown-db-f9624",
  storageBucket: "crown-db-f9624.appspot.com",
  messagingSenderId: "223044628010",
  appId: "1:223044628010:web:5ef2bd9872b5a8497bdd53",
  measurementId: "G-00KEYQEQPG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(function (error) {
    const errorCode = error.code;

    console.log(errorCode);

    const errorMessage = error.message;

    console.log(errorMessage);
  });

export default firebase;
