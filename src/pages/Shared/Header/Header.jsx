import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Quick News Publisher </small></p>
                <p>{moment().format('dddd MMMM D YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Tranding</Button>{' '}
                <Marquee pauseOnHover={true} speed={50} className='text-danger'>
                    Hello World Iam Here ,Tomi eikhane Keno ascho? News Site Na Eita
                </Marquee>
            </div>
            {/* Nabvar section started */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="">
                            <Button variant="secondary">Login</Button>{' '}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;