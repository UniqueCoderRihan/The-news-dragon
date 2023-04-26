import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagoris, setCatagoris] = useState([]);
    // console.log(catagoris);
    useEffect(() => {
        fetch('http://localhost:5000/catagoris')
            .then(res => res.json())
            .then(data => setCatagoris(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 '>
                {
                    catagoris.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;