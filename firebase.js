import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {

    apiKey: 'AIzaSyATO_qIX0uKXxscHQGnsvacR93LTam1qgA',
    authDomain: 'the.Playground.firebaseapp.com',
    projectId: 'theplayground-bb44e',
    storageBucket: 'theplayground-bb44e.appspot.com',
    messagingSenderId: '623992589035',
    appId: '1:623992589035:android:177bbed56d1fbd41978cae',
};

// const app = initializeApp(firebaseConfig);

//  // Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };