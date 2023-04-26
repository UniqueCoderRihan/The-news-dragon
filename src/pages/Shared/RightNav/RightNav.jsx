import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary">{FaGoogle} Login With Google</Button>{' '}
            <Button variant="outline-secondary"> {FaGithub}Login With Github</Button>{' '}
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>{FaFacebook} Facebook</ListGroup.Item>
                    <ListGroup.Item>{FaInstagram} Instagrame</ListGroup.Item>
                    <ListGroup.Item>{FaTwitter} Tweitter</ListGroup.Item>
                    
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;