import React from 'react';
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import { Col, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg={3}> <LeftNav></LeftNav> </Col>
                <Col lg={6}>Man Content</Col>
                <Col lg={3}>Right </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Main;