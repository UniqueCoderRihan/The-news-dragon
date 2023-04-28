import React from 'react';
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../pages/Shared/NavigationBar/Navigationbar';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Row>
                <Col lg={3}> <LeftNav></LeftNav> </Col>
                <Col lg={6}> <Outlet></Outlet> </Col>
                <Col lg={3}> <RightNav></RightNav> </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Main;