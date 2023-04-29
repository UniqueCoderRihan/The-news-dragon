import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user} = useContext(AuthContex);
    if(user){
        return children;
    }
    return (<Navigate state={{from:location}} to={'/login'} replace></Navigate>
    
    )};

export default PrivateRoutes;