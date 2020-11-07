import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDBY8ZQU-o-X8Z7FsurTEy6VtnL9GE4SnU",
    authDomain: "ac-react-tinder-clone.firebaseapp.com",
    databaseURL: "https://ac-react-tinder-clone.firebaseio.com",
    projectId: "ac-react-tinder-clone",
    storageBucket: "ac-react-tinder-clone.appspot.com",
    messagingSenderId: "757273723874",
    appId: "1:757273723874:web:c1c3241bea52f25e3c2fbb",
    measurementId: "G-40QN7609ZK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();


export default database;
