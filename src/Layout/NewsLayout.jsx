import React from 'react';
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                
                <Col lg={9}> <Outlet></Outlet> </Col>
                <Col lg={3}> <RightNav></RightNav> </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default NewsLayout;