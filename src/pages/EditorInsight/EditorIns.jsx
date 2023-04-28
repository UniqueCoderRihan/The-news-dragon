import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import frist from '../../assets/1.png'
import secound from '../../assets/2.png'
import thrid from '../../assets/3.png'

const EditorIns = () => {
    return(
        <div className='mt-3'>
            <h2>Editor Inshight</h2>
            <Row xs={1} md={2} lg={3} className="g-4 ">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={frist} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={secound} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={thrid} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
        </div>)
};

export default EditorIns;