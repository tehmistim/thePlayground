import React, { useState, useEffect } from 'react';
import { SignedInStack, SignedOutStack } from './navigation';
import firebase from 'firebase';

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const userHandler = (user) => user ? setCurrentUser(user) : setCurrentUser(null);

    // firebase listener listening at the global level

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => userHandler(user))
    }, [])
        //  on authStateChanged is the APP  -- user is signed in or out

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack/>}</>
};

export default AuthNavigation;
