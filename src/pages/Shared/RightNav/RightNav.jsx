import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import './RightNav.css'
import { useContext } from 'react';
import { AuthContex } from '../../../Providers/AuthProviders';

const RightNav = () => { 
    const {singInWithGoogle,singInWithGithub} = useContext(AuthContex);
    return (
        <div>
            <h4>Login With</h4>
            <Button onClick={singInWithGoogle} className='my-1' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>{' '}
            <Button onClick={singInWithGithub} variant="outline-secondary"> <FaGithub></FaGithub> Login With Github</Button>{' '}
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagrame</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Tweitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='sponser text-primary text-center'>
                <h3>Create <br /> An Amazing <br /> Newspaper</h3>
                <p className='p-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='py-2 my-2' variant="danger">Learn More </Button>

            </div>
        </div>
    );
};

export default RightNav;