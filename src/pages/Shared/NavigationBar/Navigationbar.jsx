import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProviders';

const Navigationbar = () => {
    const user = useContext(AuthContex);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {user &&
                                    <FaUser style={{ fontSize: '25px' }}></FaUser>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="">
                                {user ?
                                    <Button variant="secondary">Logout</Button>
                                    :
                                    <Button variant="secondary">
                                        <Link to='/login'>Login</Link>
                                    </Button>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;