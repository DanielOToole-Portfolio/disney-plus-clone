import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIIIUv1SMB7_wVwLjlllgzkFcwatnZe18",
  authDomain: "disney-plus-clone-9e617.firebaseapp.com",
  projectId: "disney-plus-clone-9e617",
  storageBucket: "disney-plus-clone-9e617.appspot.com",
  messagingSenderId: "32992876026",
  appId: "1:32992876026:web:0c376cbb80495d85578043",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
