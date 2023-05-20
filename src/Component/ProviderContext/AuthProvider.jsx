import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import app from './../../firebase/firebase.config';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const auth = getAuth(app);



    // create user for login
    const createUser = (emai, password) => {
        return createUserWithEmailAndPassword(auth, emai, password)
    }
    // login with email and password
    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // LogOut
    const logOut = () => {
        return signOut(auth);
    }

    // objerver

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const info = {
        createUser,
        signUp,
        signInWithGoogle,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;