import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from "../components/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby'
import Footer from "../components/Footer";
import Header from '../components/Header';
import Image from 'react-bootstrap/Image';
import axios from 'axios'

export default function Contact() {

    const [user_name, set_user_name] = useState("");
    const [user_email, set_user_email] = useState("");
    const [mobile_no, set_mobile_no] = useState("");
    const [comments, set_comments] = useState("");
    const [err_user_name, set_err_user_name] = useState("");
    const [err_user_email, set_err_user_email] = useState("");
    const [err_mobile_no, set_err_mobile_no] = useState("");
    const [err_comments, set_err_comments] = useState("");

    const passData = async (event) => {
        event.preventDefault();
        set_err_user_name("");
        set_err_user_email("");
        set_err_mobile_no("");
        set_err_comments("");

        var formIsValid = true;

        if (user_name == "") {
            formIsValid = false;
            set_err_user_name("Name is required.");
        }
        if (user_email == "") {
            formIsValid = false;
            set_err_user_email("Email is required.")
        }
        if (mobile_no == "") {
            formIsValid = false;
            set_err_mobile_no("Mobile number is required.")
        }
        if (comments == "") {
            formIsValid = false;
            set_err_comments("Comment field is required.")
        }

        const payload = {
            user_name: user_name,
            user_email: user_email,
            mobile_no: mobile_no,
            comments: comments
        }
        if (formIsValid) {
        const res = await axios.post('https://mobedo-consulting.onrender.com/api/contact_mail', payload );
        if (res.status) {
            console.log("first", res.message);
        }
        else {
            console.log(res)
        }
    }
    }


    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className="maincontainer contactpage"  >

                 
                <Row className='row_content row_content_form contactpage mb-2' >
                    <Col sm={12} md={7}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><strong>Name</strong> </Form.Label>
                                <Form.Control type='Name' placeholder='What is your name?' value={user_name} onChange={(e) => set_user_name(e.target.value)} />
                                <p className='text-danger'>{err_user_name}</p>
                                <Form.Label><strong>Email</strong>  </Form.Label>
                                <Form.Control type="email" placeholder="What is your email?" value={user_email} onChange={(e) => set_user_email(e.target.value)} />
                                <p className='text-danger'>{err_user_email}</p>
                                <Form.Label> <strong>Phone</strong>  </Form.Label>
                                <Form.Control type="number" placeholder="Can we call you?" value={mobile_no} onChange={(e) => set_mobile_no(e.target.value)} />
                                <p className='text-danger'>{err_mobile_no}</p>
                                <Form.Label> <strong>Comments</strong> </Form.Label>
                                <Form.Control type="text" placeholder="What can we do for you?" value={comments} onChange={(e) => set_comments(e.target.value)} />
                                <p className='text-danger'>{err_comments}</p>
                            </Form.Group>
                            
                                <Button variant="outline-primary" className='btn-warning btn_margin_cont' onClick={(e) => passData(e)}>Send Away</Button>
                                {' '}
                            
                        </Form>
                    </Col>
                    <Col sm={5} className="dirCol">
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>

    )
}
