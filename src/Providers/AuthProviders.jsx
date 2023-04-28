import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const user = {displayName: 'kireBhai'}
    const AuthInfo = {
        user
    }


    return (
        <AuthContex.Provider
        value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;