import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function footer() {
    return (

        <div className='footerbg'>

            <div className='row'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div class="col-lg-12 col-md-12 col-sm-6 img_logo_ft email_phone">
                            <div className='row'>
                                <div className='col-md-3'>

                                </div>
                                <div className='col-md-5 text-center'>
                                    <img src="/mobedo_f_logo.png" width="200px" className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                    <h6 className='firm_member'>Member firm of the MOBEDO Group</h6>

                                    {/* <p className='mb-1'>9849813377</p> */}
                                    <p className='mb-1'>info@mobedoconsulting.com</p>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-6 email_phone'>

                        </div>

                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    Service Areas
                                </h5>
                                <ul className='links_ul'>
                                    <li>
                                        <Link to='/strategy'>
                                            Strategy Practice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/technology'>
                                            Technology Practice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/digital_transformation'>
                                            Digital Transformation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/shared_services'>
                                            Shared Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    Industries
                                </h5>
                                <ul className='links_ul'>
                                    
                                    <li>
                                        BFSI
                                    </li>
                                    <li>
                                        Public Sector
                                    </li>
                                   
                                    <li>
                                        Manufacturing
                                    </li>
                                    <li>
                                        Consumer & Retail
                                    </li>
                                    <li>
                                        Travel & Hospitality
                                    </li>
                                    <li>
                                        Healthcare Lifesciences
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4'>
                            <div className='linkdiv' >
                                <h5 className='links'>
                                    About Us
                                </h5>
                                <ul className='links_ul'>
                                    <li>
                                        <Link to='/about/#story'>
                                            The MOBEDO Story
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about/#guides'>
                                            What guides us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about/#coreteam'>
                                            Our Core Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row line_above'>
                <div className='col-md-6 align-self-center'>
                    <ul className='privacy_policy mb-0'>
                        <li className='mb-0'>© {(new Date().getFullYear())} MOBEDO Consulting  Developed by Ekhie Digital</li>
                        <li className='under_line mb-0' > <Link className='under_line' to='/privacypolicy' > Privacy Policy</Link></li>
                        {/* <li className='under_line'>General Conditions</li> */}
                    </ul>
                </div>
                <div className='col-md-6 text-end align-self-center'>
                    <ul className='socialmediaicons'>
                        <li>
                            <div>
                                <a href="https://www.facebook.com/profile.php?id=100083091289444&mibextid=ZbWKwL" target="_blank"><img src="/fb2.png" alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.linkedin.com/in/mobedo-consulting-8450ba239" target="_blank"><img src="/linked2.png" alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/twitter2.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/insta2.png" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
