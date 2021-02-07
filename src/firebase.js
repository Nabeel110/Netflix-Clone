import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0tlUuQjL5L6iPsBGQFUIk05zLFT7zSu0",
  authDomain: "netflix-clone-b5232.firebaseapp.com",
  projectId: "netflix-clone-b5232",
  storageBucket: "netflix-clone-b5232.appspot.com",
  messagingSenderId: "609126194481",
  appId: "1:609126194481:web:ce84338f004162dd0d6410",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
