import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

export default function Careers() {
    const [myFile, setMyFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [username, set_username] = useState('');
    const [mobile_no, set_mobile_no] = useState('');
    const [user_email, set_user_email] = useState('');
    const [err_username, set_err_username] = useState('');
    const [err_mobile_no, set_err_mobile_no] = useState('');
    const [err_email_id, set_err_email_id] = useState('');
    const [err_myFile, set_err_myFile] = useState('')

    const saveFile = (e) => {
        setMyFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
        console.log(e);
        // const formData = new FormData()
    }

    const uploadFile = async (e) => {
        e.preventDefault();
        set_err_username('');
        set_err_myFile('');
        set_err_email_id('');
        set_err_mobile_no('');
        var formIsValid = true;

        if(username === '') {
            formIsValid = false;
            set_err_username("Name field is required.")
        }
        if(mobile_no === '') {
            formIsValid = false;
            set_err_mobile_no("Mobile number field is required.")
        }
        if(user_email === '') {
            formIsValid = false;
            set_err_email_id("Email field is required.")
        }
        if(myFile === '') {
            formIsValid = false;
            set_err_myFile("Resume is required.")
        }
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', myFile);
        formData.append('file_name', fileName)
        formData.append('user_name', username);
        formData.append('user_email', user_email);
        formData.append('mobile_no', mobile_no);
        // console.log("first", formData.entries())

        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]); 
        //  }
        
        // try {
            if(formIsValid) {
                const res = await axios.post('https://mobedo-consulting.onrender.com/api/send_email', formData)
                console.log("res", res)
            }
        // } catch (error) {

        // }
    }

    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className=''>
                <Row>
                    <img src="/p42.png" alt="" />

                </Row>
                <Row className="padding_content align-self-center">

                    <Col className="align-self-center">
                        <div md={4} sm={12} className="col_side_heading   text-center">
                            <p className="harmo_color mb-0">Be a part of us .</p>
                        </div>
                    </Col>
                    <Col md={8} sm={12} className="col_side_content">
                        <p className="mb-0">We aim to create a welcoming and comfortable workplace that
                            promotes integration and synergy. Our values focus on providing an
                            engaging and enlightening environment that drives impact. Join our
                            ambitious and happy team to access the benefits of a better
                            workspace. </p>

                    </Col>
                </Row>
                {/* <Row className="padding_content">
                    <Col sm={12}>
                        <div className="col_side_heading">
                            <p className="harmo_color"></p>
                        </div>
                    </Col>
                    <Col className="col_side_content" sm={12}>
                        <p>We aim to create a welcoming and comfortable workplace that
                            promotes integration and synergy. Our values focus on providing an
                            engaging and enlightening environment that drives impact. Join our
                            ambitious and happy team to access the benefits of a better
                            workspace. </p>
                    </Col>
                    

                </Row> */}
                <div className='row padding_content'>
                    <div className='col-md-7 col-sm-12'>
                        <p className='form_p_size'>Fill out your information below and we will get in touch with you</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><strong>Name <span className='asteristk'>*</span></strong> </Form.Label>
                                <Form.Control type='Name' placeholder='What is your name?' value={username} onChange={(e) => set_username(e.target.value)} />
                                <p className='text-danger'>{err_username}</p>
                                <Form.Label><strong>Email <span className='asteristk'>*</span></strong>  </Form.Label>
                                <Form.Control type="email" placeholder="What is your email?" value={user_email} onChange={(e) => set_user_email(e.target.value)} />
                                <p className='text-danger'>{err_email_id}</p>
                                <Form.Label> <strong>Phone <span className='asteristk'>*</span></strong>  </Form.Label>
                                <Form.Control type="number" placeholder="Can we call you?" value={mobile_no} onChange={(e) => set_mobile_no(e.target.value)} />
                                <p className='text-danger'>{err_mobile_no}</p>
                                <Form.Label for="myfile"><strong> Resume <span className='asteristk'>*</span></strong></Form.Label>
                                <Form.Control className='' type="file" name='file' onChange={(e) => saveFile(e)} multiple></Form.Control>
                                <p className='text-danger'>{err_myFile}</p>
                            </Form.Group>
                            <Button className='btn-warning btn_margin' onClick={(e) => uploadFile(e)}>Submit</Button>{' '}
                        </Form>
                    </div>
                    <div>

                    </div>
                </div>

                {/* <h1 className='ctitle'>
                    Careers
                </h1>
                <div>
                    <p className='cbodyo'>
                        In Sparsh Communications’ HR practices, we have developed an environment that encourages teamwork, inspires people to drive themselves and take ownership of their key responsibility areas. Sparsh Communications is a fast growing organization and we are constantly looking for new talent and bright minds who can add value to our team. Here, the opportunities we offer are exciting and limitless; you need to be charged enough and willing to do something that makes a difference. We strongly consider that building a career does not just include professional growth alone, but personal growth too, and henceforth we have established a culture to build personalities through continuous learning. In fact, our employees take pride in their work and get rewarded for their hard work.
                    </p>
                </div>
                <div>
                    <p className='cbodyt'>
                        At Sparsh Communications, personal growth never takes a backseat. It nurtures an environment where continuous learning and development is enthusiastically followed and supported. Indeed, as an associate, you can design a career plan and identify areas of growth with the help of our organization. Moreover, our commitment is to deliver you with a technical challenge, career advancement opportunities and diversity of assignment. Hence, we also provide the flexibility along with the encouragement and support to help understand an individual’s true potential.
                    </p>
                </div>
                <Row className='openingRow' >
                    <h1 className='otitle'>
                        Current Openings
                    </h1>
                    <Col className='dotCol'>
                        <Row className='imgRow'>
                            <Col>
                                <img src="/msdot-net.png" alt="" />
                            </Col>
                            <Col>
                               <p className='exp1'> Experience: 3+ years onwards</p> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className='ulitems'>
                                    <li>Good in C# / VB.Net</li>
                                    <li> Minimum 1+ years of working experience of Web API</li>
                                    <li>Exposure to Angular / Web technologies</li>
                                    <li>Good in OOPS, Linq, MVC</li>
                                    <li>Should have hands-on experience in working on complex business applications.</li>
                                    <li>Exposure to windows azure environment will be an added advantage (like Azure SQL server)</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                    <Col className='virusCol'>
                        <Row className='imgRow'>
                            <Col>
                                <img src="/scan-virus.png" alt="" />
                            </Col>
                            <Col>
                                <h5 className='vTitle'> Test Engineer </h5>
                            </Col>
                            <Col>
                               <p className='exp2'>Experience: 4+ years onwards </p> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className='ulitems' >
                                    <li>Strong in Manual Testing</li>
                                    <li>Minimum 1+ years of working experience of API Testing</li>
                                    <li>Good in Database Testing</li>
                                    <li>Should have hands-on experience in working on complex business applications.</li>
                                    <li>Exposure to ERP application or E-Commerce domain environment will be an added advantage</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='openingRowN'>
                    <Col className='devCol'>
                        <Row className='imgRow'>
                            <Col>
                                <img src="/developer.png" alt="" />
                            </Col>
                            <Col>
                               <h5 className='dtitle'> Trainee Developers </h5>
                            </Col>
                            <Col>
                                <p className='exp3'>  Experience: 4+ years onwards </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className='ulitems'>
                                    <li>Should be good in Asp.net, C#, Sql Server.</li>
                                    <li>Should have good communication skills.</li>

                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
            </Container>
            <Footer />

        </>
    )
}
