import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// pulling in the utils library

const config = {
  apiKey: "AIzaSyBQl22SAMmUJnVnNOH6qi6g4_eTVOJawdE",
  authDomain: "e-commerce-site-3cedd.firebaseapp.com",
  databaseURL: "https://e-commerce-site-3cedd.firebaseio.com",
  projectId: "e-commerce-site-3cedd",
  storageBucket: "e-commerce-site-3cedd.appspot.com",
  messagingSenderId: "815962391091",
  appId: "1:815962391091:web:c1659f1882ac0c0568d946",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  console.log(snapShot)

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
