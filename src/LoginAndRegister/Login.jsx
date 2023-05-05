import React from 'react';
import { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProviders';
import { useState } from 'react';
import UseTitle from '../hooks/UseTitle/UseTitle';

const Login = () => {
    const {LoginWithPassword} = useContext(AuthContex);
    const navigate = useNavigate();
    const [error,setError] = useState();

    UseTitle('Login');

    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin=(event)=>{
        event.preventDefault();
        setError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginWithPassword(email,password)
        .then(result=>{
            const LoginUser = result.user;
            navigate(from)
            console.log(LoginUser);
        })
        .catch(error=>setError(error.message))

    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>
                <p><small> <Link to='/register'>New To? SIngUp</Link></small></p>
            </Form>
        </Container>
    );
};

export default Login;