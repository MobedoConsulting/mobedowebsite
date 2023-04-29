import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function sharedservices() {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className='startegy_page'>
                <img src="/p20.png" alt="" />
                <h1 className="p_h_title">Shared Services</h1>
                <Row className="row_content padding_content">

                    <Col md={6} sm={12}>
                        <div className="col_side_heading align-self-center text-center">
                            <p className="blue_color">Efficiency at Scale: Unlocking the Power of Shared Services</p>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="col_side_content align-self-center">
                        <p>MOBEDO expertise and experience offering shared services will help businesses streamline processes, reduce costs, and improve efficiency by centralizing and standardizing common functions across the organization. </p>
                    </Col>
                </Row>
                <div className="desktop_view">
                    <div className="row mt-4 padding_content" id="sh_one">
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Co-Founder as a Service</h2>
                            {/* <h6>Innovating for growth, transforming for success</h6> */}
                            <p>Our team of experts has a proven track record of helping startups succeed. We offer market research, business plan development, financial modeling, and operational support to help you validate your idea, secure funding, and scale your business. Let us use our expertise and resources to help you achieve your goals. </p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src="/p21.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="sh_two">
                        <div className="col-md-6 align-self-center">
                            <img src="/p22.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">MVP as a Service</h2>
                            {/* <h6>Defining your brand, communicating your value</h6> */}
                            <p>Minimize risk and cost while gaining valuable market insights by developing and testing an MVP with our team of experts. We'll help you define and build a minimum viable product that accurately represents your idea and provide feedback and guidance to iterate and improve based on real data and customer feedback.</p>
                        </div>

                    </div>
                    <div className="row mt-4 padding_content" id="sh_three">
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Innovation as a Service</h2>
                            {/* <h6>Bringing your value to market, driving growth through strategy </h6> */}
                            <p>Stay ahead of the competition with our innovation as a service offering. Our team of experts provides access to the tools, resources, and expertise you need to drive continuous innovation and growth. We'll help you identify opportunities, develop and test new ideas, and implement successful innovation programs that drive business value and competitive advantage.</p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src="/p23.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="sh_four">
                        <div className="col-md-6 align-self-center">
                            <img src="/p24.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Testing as a Service</h2>
                            {/* <h6>Innovating for tomorrow, leading the way today </h6> */}
                            <p>Ensure the quality and reliability of your products and systems with our testing as a service offering. Our team of experts provides a range of testing services, including functional, performance, and security testing. We'll help you define and implement a comprehensive testing strategy that meets your needs and ensures your products are ready for market.</p>
                        </div>
                    </div>
                </div>

                <div className="mobile_view">
                    <div className="row mt-3" id="sh_one_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p21.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Co-Founder as a Service</h2>
                            {/* <h6>Innovating for growth, transforming for success</h6> */}
                            <p>Our team of experts has a proven track record of helping startups succeed. We offer market research, business plan development, financial modeling, and operational support to help you validate your idea, secure funding, and scale your business. Let us use our expertise and resources to help you achieve your goals. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="sh_two_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p22.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">MVP as a Service</h2>
                            {/* <h6>Defining your brand, communicating your value</h6> */}
                            <p>Minimize risk and cost while gaining valuable market insights by developing and testing an MVP with our team of experts. We'll help you define and build a minimum viable product that accurately represents your idea and provide feedback and guidance to iterate and improve based on real data and customer feedback.</p>
                        </div>

                    </div>
                    <div className="row mt-3" id="sh_three_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p23.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Innovation as a Service</h2>
                            {/* <h6>Bringing your value to market, driving growth through strategy </h6> */}
                            <p>Stay ahead of the competition with our innovation as a service offering. Our team of experts provides access to the tools, resources, and expertise you need to drive continuous innovation and growth. We'll help you identify opportunities, develop and test new ideas, and implement successful innovation programs that drive business value and competitive advantage.</p>
                        </div>
                    </div>
                    <div className="row mt-3" id="sh_four_m">
                        <div className="col-md-6 align-self-center">
                            <img src="/p24.png" alt="" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="col_side_heading">Testing as a Service</h2>
                            {/* <h6>Innovating for tomorrow, leading the way today </h6> */}
                            <p>Ensure the quality and reliability of your products and systems with our testing as a service offering. Our team of experts provides a range of testing services, including functional, performance, and security testing. We'll help you define and implement a comprehensive testing strategy that meets your needs and ensures your products are ready for market.</p>
                        </div>
                    </div>
                </div>

                {/* <h5 className="our_team mt-3">Our Team</h5>
                <div className="row core_team">
                    <div className="col-md-3">
                        <div className="img_row_team">
                        <img src="/t1.jpg" alt=""/>
                        </div>
                        <h5>Anup Puthan</h5>
                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                        <img src="/t2.jpg" alt=""/>
                        </div>
                        <h5>Arvind Maheswaram</h5>

                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                        <img src="/t3.jpg" alt=""/>
                        </div>
                        <h5>Gaurav Bhaskar</h5>

                    </div>
                </div> */}
                {/* <Row>
                    <Col>
                        <h1 className='ctitle'>
                            SHARED SERVICES
                        </h1>
                        <p className='cbodyo'>
                            Our team of experienced leaders have a track record of helping startups achieve their goals. We offer a range of services, including market research, business plan development, financial modeling, and operational support. Whether you're looking to validate a new business idea, secure funding, or scale your operations, we have the expertise and resources to help you succeed.
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Co-Founder-As-a-Service</a></li>
                            <li><a href="#section2"> MVP-As-a-Service</a></li>
                            <li><a href="#section3">Innovation-As-a-Service</a></li>
                            <li><a href="#section4"> Testing-as-a-Service</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Co-Founder-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Our team of experienced leaders have a track record of helping startups achieve their goals. We offer a range of services, including market research, business plan development, financial modeling, and operational support. Whether you're looking to validate a new business idea, secure funding, or scale your operations, we have the expertise and resources to help you succeed.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            MVP-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            MVP as a service helps businesses validate product ideas and gain valuable market insights, while minimizing risk and cost by developing and testing minimum viable products. Our team of experts can help you define and build an MVP that accurately represents your product, and provide feedback and guidance to help you iterate and improve your product based on real-world data and customer feedback
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            Innovation-As-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Innovation as a service helps businesses stay ahead of the curve by providing access to a wide range of tools, resources, and expertise to drive continuous innovation and growth. Our team of experts can help you identify opportunities for innovation, develop and test new ideas, and implement successful innovation programs that drive business value and competitive advantage
                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Testing-as-a-Service
                        </h1>
                        <p className='cbodyo'>
                            Testing as a service helps businesses ensure the quality and reliability of their products and systems by providing a range of testing services, including functional testing, performance testing, security testing, and more. Our team of experts can help you define and implement a comprehensive testing strategy that meets your business needs and goals, and ensure that your products and systems are ready for market.
                        </p>
                    </div>
                </Row> */}
            </Container>
            <Footer />
        </>
    )
}