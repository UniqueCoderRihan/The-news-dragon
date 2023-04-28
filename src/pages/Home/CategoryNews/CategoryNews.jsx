import React from 'react';

const CategoryNews = ({news}) => {
    const {title}=news;
    return (
        <div className='border' >
           <h3>{title}</h3> 
        </div>
    );
};

export default CategoryNews;