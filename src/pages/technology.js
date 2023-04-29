import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function technology() {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className='startegy_page'>
                <img src="/p13.png" alt="" />
                <h1 className="p_h_title">Technology Consulting</h1>
                <Row className="row_content  padding_content ">
                    <Col md={6} sm={12} className="align-self-center">
                        <div className="col_side_heading text-center">
                            <p className="blue_color">Leading the way in technology, pushing the boundaries of innovation </p>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="col_side_content align-self-center">
                        <p>Maximize the value of technology for your business with our Technology Development & Consulting practice. Our experts help shape technology visions, execute digital transformation and create sustainable value from investments.</p>
                    </Col>
                </Row>
                <div className="desktop_view">
                    <div className="row mt-4 padding_content" id="t_one">
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Enterprise Applications</h2>
                            <h6>Building your business success, one application at a time</h6>
                            <p>Unlock the full potential of your organization with our Enterprise applications consulting & development expertise. We align technology strategy with business goals, modernize systems (and architecture), increase efficiency by implement modern operating models. </p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src="/p14.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="t_two">
                        <div className="col-md-6 align-self-center">
                            <img src="/p15.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Technology Solutions Delivery</h2>
                            <h6>Powering your success with cutting-edge technology solutions</h6>
                            <p>We provide cutting-edge solutions that drive innovation and growth. Our team of experts work closely with you to understand your unique needs and tailor our offerings to help you achieve your business objectives. </p>
                        </div>

                    </div>
                    <div className="row mt-4 padding_content" id="t_three">
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">WEB3</h2>
                            <h6>Demystifying the future of the digital economy </h6>
                            <p>Unpack the implications of Web3 and understand its future impact on your industry. We help you navigate the digital economy, assess opportunities and threats, and chart a course for long-term value generation. Our experts can support you in developing your Web3 strategy, develop your capabilities and identify monetization opportunities. </p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src="/p16.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="t_four">
                        <div className="col-md-6 align-self-center">
                            <img src="/p17.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">CyberSecurity Services</h2>
                            <h6>Securing your digital world</h6>
                            <p>Our team of cybersecurity experts can help you quantify and prioritize your risks. With industry-leading partnerships and an established team we can extend your team and help detect & respond to threats.</p>
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="t_five">
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">UI/UX Strategy & Design</h2>
                            <h6>Designing user-centric solutions to innovate & transform</h6>
                            <p>Transform your business by unleashing the power of design. Our human-centered approach combines strategy, design, development, and operations to create innovative experiences and products that strengthen relationships with customers and employees. Leverage our global network of studios for comprehensive support.</p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src="/p18.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="t_six">
                        <div className="col-md-6 align-self-center">
                            <img src="/p19.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Metaverse</h2>
                            <h6>Shaping the future of digital engagement </h6>
                            <p>Thrive in the Metaverse with responsible strategies. Our in-house experts and partners can help you understand and shape a vision  to navigate the rapidly-evolving metaverse landscape and creating a sustainable strategy for success through immersive education and exploration of industry-specific and functional use cases, all while prioritizing responsibility and long-term value generation.</p>
                        </div>
                    </div>
                </div>



                <div className="mobile_view">
                    <div className="row mt-3" id="t_one_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p14.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Enterprise Applications</h2>
                            <h6>Building your business success, one application at a time</h6>
                            <p>Unlock the full potential of your organization with our Enterprise applications consulting & development expertise. We align technology strategy with business goals, modernize systems (and architecture), increase efficiency by implement modern operating models. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="t_two_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p15.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Technology Solutions Delivery</h2>
                            <h6>Powering your success with cutting-edge technology solutions</h6>
                            <p>We provide cutting-edge solutions that drive innovation and growth. Our team of experts work closely with you to understand your unique needs and tailor our offerings to help you achieve your business objectives. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="t_three_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p16.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">WEB3</h2>
                            <h6>Demystifying the future of the digital economy </h6>
                            <p>Unpack the implications of Web3 and understand its future impact on your industry. We help you navigate the digital economy, assess opportunities and threats, and chart a course for long-term value generation. Our experts can support you in developing your Web3 strategy, develop your capabilities and identify monetization opportunities. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="t_four_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p17.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">CyberSecurity Services</h2>
                            <h6>Securing your digital world</h6>
                            <p>Our team of cybersecurity experts can help you quantify and prioritize your risks. With industry-leading partnerships and an established team we can extend your team and help detect & respond to threats.</p>
                        </div>
                    </div>
                    <div className="row mt-3" id="t_five_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p18.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">UI/UX Strategy & Design</h2>
                            <h6>Designing user-centric solutions to innovate & transform</h6>
                            <p>Transform your business by unleashing the power of design. Our human-centered approach combines strategy, design, development, and operations to create innovative experiences and products that strengthen relationships with customers and employees. Leverage our global network of studios for comprehensive support.</p>
                        </div>

                    </div>
                    <div className="row mt-3" id="t_six_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p19.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Metaverse</h2>
                            <h6>Shaping the future of digital engagement </h6>
                            <p>Thrive in the Metaverse with responsible strategies. Our in-house experts and partners can help you understand and shape a vision  to navigate the rapidly-evolving metaverse landscape and creating a sustainable strategy for success through immersive education and exploration of industry-specific and functional use cases, all while prioritizing responsibility and long-term value generation.</p>
                        </div>
                    </div>
                </div>

                {/* <h5 className="our_team mt-3">Our Team</h5>
                <div className="row core_team">
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t1.jpg" alt="" />
                        </div>
                        <h5>Anup Puthan</h5>
                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t2.jpg" alt="" />
                        </div>
                        <h5>Arvind Maheswaram</h5>
                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t3.jpg" alt="" />
                        </div>
                        <h5>Gaurav Bhaskar</h5>

                    </div>
                </div> */}

                {/* <Row>
                    <Col>
                        <h1 className='ctitle'>
                            TECHNOLOGY
                        </h1>
                        <p className='cbodyo'>
                            Our Technology practice helps organizations transform their business through the use of technology and innovation, enabling them to achieve their technology vision, create sustainable value from their investments, and successfully navigate a foundational technology transformation journey
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Enterprise Applications </a></li>
                            <li><a href="#section2">Technology Solutions Delivery </a></li>
                            <li><a href="#section3">WEB3 </a></li>
                            <li><a href="#section4">Metaverse</a></li>
                            <li><a href="#section5">CyberSecurity Services</a></li>
                            <li><a href="#section6">UI/UX Strategy and Design</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Enterprise Applications
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO has the expertise and resources to help you plan, define, build, implement, operate, and manage the right ERP solution for your business.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            Technology Solutions Delivery
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO specializes in delivering technically complex, high-risk projects, collaborating with consultants, clients, and other stakeholders to prioritize, adapt to changing requirements, and use resources effectively
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            WEB3
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO's extensive blockchain experience helps organizations enhance application modernization, automate business processes, launch new digital products, and monetize digital assets through digital transformation


                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Metaverse
                        </h1>
                        <p className='cbodyo'>
                            Maximize your futuristic potential with our end-to-end strategic product architecture, prototyping, software development, digitalization, and management services.

                        </p>
                    </div>
                    <div id="section5">
                        <h1 className='ctitle'>
                            CyberSecurity Services
                        </h1>
                        <p className='cbodyo'>
                            MOBEDO's cybersecurity services provide proactive, industry-specific threat intelligence to help customers defend against cyberattacks and create a secure business ecosystem
                            Our prototyping and MVP development services help you discover and identify product-specific demands based on the latest market trends, allowing you to test and minimize risks before launching your product


                        </p>
                    </div>
                    <div id="section6">
                        <h1 className='ctitle'>
                            UI/UX Strategy and Design
                        </h1>
                        <p className='cbodyo'>
                            Our team of creative professionals ensures that your solutions are innovative, intuitive, and engaging through a design-first approach
                        </p>
                    </div>
                </Row> */}
            </Container>
            <Footer />
        </>
    )
}