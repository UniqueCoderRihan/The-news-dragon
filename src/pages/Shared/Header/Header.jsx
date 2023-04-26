import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
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
                <Marquee>
                    Hello World Iam Here ,Tomi eikhane Keno ascho? News Site Na Eita
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;