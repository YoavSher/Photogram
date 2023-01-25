import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHmLYor6ZPVxdBIj3UzIx9Q4Calfyadbc",
    authDomain: "photogram-fb215.firebaseapp.com",
    projectId: "photogram-fb215",
    storageBucket: "photogram-fb215.appspot.com",
    messagingSenderId: "63883030870",
    appId: "1:63883030870:web:9adc4ac1303175a75026f7",
    measurementId: "G-PN7T11J8L5"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };