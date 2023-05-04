/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const profile = auth.currentUser;

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const googleUser = () =>{
        setLoading(true);
        signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        Login,
        Logout,
        googleUser,
        setUser,
        profile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;