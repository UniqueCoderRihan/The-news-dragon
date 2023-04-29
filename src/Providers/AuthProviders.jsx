import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);

    const createUserWithPassword = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginWithPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = ()=>{
        return signOut(auth)
    }
    // OnAuthStateChange
    useEffect(()=>{
        const unsubcrive = onAuthStateChanged(auth,loggedUser =>{
            console.log('Looged In USer Inside observwer',loggedUser);
            setUser(loggedUser)
        })
        return()=>{
            unsubcrive();
        }
    },[])
    const AuthInfo = {
        user,
        createUserWithPassword,
        LoginWithPassword,
        LogOut
    }


    return (
        <AuthContex.Provider
        value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;