import firebase from 'firebase';

const firebaseConfig = {

    apiKey: 'AIzaSyATO_qIX0uKXxscHQGnsvacR93LTam1qgA',
    authDomain: 'the.Playground.firebaseapp.com',
    projectId: 'theplayground-bb44e',
    storageBucket: 'theplayground-bb44e.appspot.com',
    messagingSenderId: '623992589035',
    appId: '1:623992589035:android:177bbed56d1fbd41978cae',
};

 // Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;