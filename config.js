import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5X2Fwi--b84VFHXql_0eoFqtNIkfg4Gs",
  authDomain: "test-b99c2.firebaseapp.com",
  projectId: "test-b99c2",
  storageBucket: "test-b99c2.appspot.com",
  messagingSenderId: "79966263839",
  appId: "1:79966263839:web:7378d0ada133b7944f132a",
  measurementId: "G-49YNZWDB16",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// const app = initializeApp(firebaseConfig);
// export const Storage = getStorage(app);
