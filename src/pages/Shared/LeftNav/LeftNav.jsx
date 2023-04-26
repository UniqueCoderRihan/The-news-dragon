import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {

    const [catagoris,setCatagoris]= useState([]);
    console.log(catagoris);
    useEffect(()=>{
        fetch('http://localhost:5000/catagoris')
        .then(res=>res.json())
        .then(data=>setCatagoris(data))
        .catch(error=>console.log(error))
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default LeftNav;