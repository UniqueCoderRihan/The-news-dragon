import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import frist from '../../../assets/1.png'
import secound from '../../../assets/2.png'
import thrid from '../../../assets/3.png'

const LeftNav = () => {

    const [catagoris, setCatagoris] = useState([]);
    // console.log(catagoris);
    useEffect(() => {
        fetch('https://the-news-dragon-server-uniquecoderrihan.vercel.app/catagoris')
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
            <Row xs={1} md={1} lg={1} className="g-4 ">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={frist} />
                        <Card.Body>
                            <Card.Title>Tucker Carlson Swears Vladimir Putin</Card.Title>
                            <Card.Text>
                            Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={secound} />
                        <Card.Body>
                            <Card.Title>Tucker Carlson Swears Vladimir Putin</Card.Title>
                            <Card.Text>
                            Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={thrid} />
                        <Card.Body>
                            <Card.Title>Tucker Carlson Swears Vladimir Putin</Card.Title>
                            <Card.Text>
                            Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;