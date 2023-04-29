import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const user = null;

    const createUserWithPassword = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginWithPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const AuthInfo = {
        user,
        createUserWithPassword,
        LoginWithPassword
    }


    return (
        <AuthContex.Provider
        value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;