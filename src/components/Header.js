import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <Navbar className='headerbg fixed-top headerpage'>
            <Container fluid className="" >
                <Navbar.Brand >
                    <Row className="emailRow">
                        <Col className='emailCol'>
                            <div className='email'>
                                <img src="/mail.png" width="25px" height="25px" alt="" /> info@mobedo.com
                            </div>
                        </Col>
                        <Col className='phoneCol'>
                            <div className='phone'>
                                <img src="/phone.png"  width="25px"  height="25px" alt="" /> 01897465226
                            </div>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar className='socialmedia' >
                    <Row >
                    <Col>
                            <div className='find'>
                               <b> Find us on </b>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src="/fb2.png" width="25px" height="25px" alt="" /> 
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src="/linkedin.png"  width="20px"  height="20px" alt="" /> 
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src="/twitter.png"  width="25px"  height="25px" alt="" /> 
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src="/youtube1.png"  width="25px"  height="25px" alt="" /> 
                            </div>
                        </Col>
                    </Row>
                </Navbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
