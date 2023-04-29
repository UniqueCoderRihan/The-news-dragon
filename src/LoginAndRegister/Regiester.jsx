import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProviders';
import { useState } from 'react';

const Regiester = () => {

    const { createUserWithPassword } = useContext(AuthContex);
    const [error,seError] = useState();
    const navigate = useNavigate();
    const handleRegister = (event)=>{
        event.preventDefault();
        seError(null)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const userFullName = form.name.value;
        // console.log(email,password,userFullName)
        createUserWithPassword(email,password)
        .then(result=>{
            const newUser = result.user;
            navigate('/category/0')
        })
        .catch(error=>seError(error.message))
    }


    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Your Name: </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
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
                <p>{error}</p>
                <p><small> <Link to='/login'>Alredy Have an Account? Login</Link></small></p>
            </Form>
        </Container>
    );
};

export default Regiester;