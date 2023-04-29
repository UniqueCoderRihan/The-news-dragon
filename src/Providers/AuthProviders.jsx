import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContex = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);

    // CreateUSer with Email passoword
    const createUserWithPassword = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login With EMail and Password
    const LoginWithPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Google
    const singInWithGoogle =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    // Github---------->>>>>
    const singInWithGithub = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    // logout 
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
        singInWithGoogle,
        singInWithGithub,
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