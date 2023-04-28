import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Regiester = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name: </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PHOTO URL </Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="AMi Raji Achi Sob Khane" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small> <Link to='/login'>Alredy Have an Account? Login</Link></small></p>
            </Form>
        </Container>
    );
};

export default Regiester;