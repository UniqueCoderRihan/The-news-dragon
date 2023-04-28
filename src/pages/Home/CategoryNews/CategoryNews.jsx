import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa'
import Rating from 'react-rating';
const CategoryNews = ({ news }) => {
    const { title, _id, total_view, details, image_url, author, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>

                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? details : <>{details.slice(0, 250)}... <Link className='text-danger fw-bold text-decoration-none' to={`/news/${_id}`}> ReadMore...</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span>{rating.number}</span>
                </div>
                <div className=''>
                    <FaEye></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CategoryNews;