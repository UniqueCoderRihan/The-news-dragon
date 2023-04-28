import React from 'react';
// import CategoryNews from '../../Home/CategoryNews/CategoryNews';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNews from '../../Home/CategoryNews/CategoryNews';

const Category = () => {
    const {id} = useParams();
    const CatagoryNews = useLoaderData();
    const {_id} = CatagoryNews;
    // console.log(CatagoryNews);
    return (
        <div>
            <h2>Available News {CatagoryNews.length}</h2>
            {
                CatagoryNews.map(news=> <CategoryNews
                key={news._id}
                news={news}></CategoryNews>)
            }
        </div>
    );
};

export default Category;