import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDVqUZ75lIILsLvRZ_U7Qo9pjzEc15VPBg",
  authDomain: "pokemon-63daa.firebaseapp.com",
  projectId: "pokemon-63daa",
  storageBucket: "pokemon-63daa.appspot.com",
  messagingSenderId: "777701782762",
  appId: "1:777701782762:web:96bf7945eaaea416bd5393",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, data) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    //criando o usuario
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.log("error while creating user" + error.message);
    }
  }
  return userRef;
};

//retornando promise por conta do saga
export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionDocs = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const docRef = await collectionRef.add(objectToAdd);
  const doc = await docRef.get();
  return { ...doc.data(), docId: doc.id };
};

export const removeCollectionDocs = async (collectionKey, id) => {
  const collectionRef = await firestore
    .collection(collectionKey)
    .where("id", "==", id)
    .get();
  collectionRef.docs.forEach((doc) => doc.ref.delete());
};

export const getPokedexDocs = async (userId) => {
  const pokedex = [];
  const collectionRef = await firestore
    .collection("pokedex")
    .where("userId", "==", userId)
    .get();

  collectionRef.docs.forEach((doc) =>
    pokedex.push({ ...doc.data(), docId: doc.id })
  );

  return pokedex;
};

export default firebase;
