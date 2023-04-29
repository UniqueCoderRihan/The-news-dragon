import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user,loading} = useContext(AuthContex);
    if(loading){
        return  <Spinner className='text-center' animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return (<Navigate state={{from:location}} to={'/login'} replace></Navigate>
    
    )};

export default PrivateRoutes;