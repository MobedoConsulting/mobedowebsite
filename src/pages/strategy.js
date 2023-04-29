
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function strategy() {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Container fluid className=' startegy_page'>
                <img src="/p7.png" alt="" />
                <h1 className="p_h_title">Strategy Consulting</h1>
                <Row className="row_content padding_content">

                    <Col md={6} sm={12} className="align-self-center">
                        <div className="col_side_heading text-center">
                            <p className="blue_color">Strategies that Deliver Results.</p>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="col_side_content align-self-center ">
                        <p>Customized, comprehensive strategies that drive sustainable growth, improve performance and create a competitive edge to helping our clients navigate the ever-changing business landscape. </p>
                    </Col>
                </Row>
                <div className="desktop_view">
                    <div className="row mt-4 padding_content" id="st_one">
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Core Business Transformation</h2>
                            <h6>Innovating for growth, transforming for success</h6>
                            <p>Ever-changing business environment & conditions makes it essential for companies to change their trajectory, improve their performance and reinvent to stay ahead of the curve. MOBEDO’s team of strategists bring their expertise, tools and materials to support your executive teams to conceptualize, plan and mobilize change across all levels of the organizations. </p>
                        </div>
                        <div className="col-md-5 align-self-center">
                            <img src="/p8.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="st_two">
                        <div className="col-md-5 align-self-center">
                            <img src="/p9.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Branding, Positioning & Messaging</h2>
                            <h6>Defining your brand, communicating your value</h6>
                            <p>Differentiate yourself in a crowded market with a strong brand strategy. We help companies increase customer demand by developing a unique and customer-aligned strategy that leverages their strengths. </p>
                        </div>

                    </div>
                    <div className="row mt-4 padding_content" id="st_three">
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Marketing & Go-To-Market Strategy</h2>
                            <h6>Bringing your value to market, driving growth through strategy </h6>
                            <p>Maintaining revenue growth in an ever-changing market is a challenge, but it can be met by having the right go-to-market strategy in place and effectively implementing it. Our expert strategists help you identify market opportunities, optimize resource deployment, and achieve sustained outstanding results. </p>
                        </div>
                        <div className="col-md-5 align-self-center">
                            <img src="/p10.png" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="st_four">
                        <div className="col-md-5 align-self-center">
                            <img src="/p11.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Innovation Strategy</h2>
                            <h6>Innovating for tomorrow, leading the way today </h6>
                            <p>Avoid innovation pitfalls with MOBEDO's strategy-led, action-biased and agile approach. Whether it's in consumer products or B2B, product, service or business model, we collaborate closely with our clients to enhance their innovation system and make innovation happen.</p>
                        </div>
                    </div>
                    <div className="row mt-4 padding_content" id="st_five">
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Business Strategy Development</h2>
                            <h6>Business Strategy developed to help you navigate the path to success</h6>
                            <p>Achieve your business goals with our expert strategy development consulting. We work with you to create a custom plan that takes into account your unique needs & objectives and guides you on the path to success.</p>
                        </div>
                        <div className="col-md-5 align-self-center">
                            <img src="/p12.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="mobile_view">
                    <div className="row mt-3" id="st_one_m">
                        <div className="col-md-5 align-self-center">
                            <img src="/p8.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Core Business Transformation</h2>
                            <h6>Innovating for growth, transforming for success</h6>
                            <p>Ever-changing business environment & conditions makes it essential for companies to change their trajectory, improve their performance and reinvent to stay ahead of the curve. MOBEDO’s team of strategists bring their expertise, tools and materials to support your executive teams to conceptualize, plan and mobilize change across all levels of the organizations. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="st_two_m">
                        <div className="col-md-5 align-self-center">
                            <img src="/p9.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Branding, Positioning & Messaging</h2>
                            <h6>Defining your brand, communicating your value</h6>
                            <p>Differentiate yourself in a crowded market with a strong brand strategy. We help companies increase customer demand by developing a unique and customer-aligned strategy that leverages their strengths. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="st_three_m">
                        <div className="col-md-5 align-self-center">
                            <img src="/p10.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Marketing & Go-To-Market Strategy</h2>
                            <h6>Bringing your value to market, driving growth through strategy </h6>
                            <p>Maintaining revenue growth in an ever-changing market is a challenge, but it can be met by having the right go-to-market strategy in place and effectively implementing it. Our expert strategists help you identify market opportunities, optimize resource deployment, and achieve sustained outstanding results. </p>
                        </div>

                    </div>
                    <div className="row mt-3" id="st_four_m">
                        <div className="col-md-5 align-self-center">
                            <img src="/p11.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Innovation Strategy</h2>
                            <h6>Innovating for tomorrow, leading the way today </h6>
                            <p>Avoid innovation pitfalls with MOBEDO's strategy-led, action-biased and agile approach. Whether it's in consumer products or B2B, product, service or business model, we collaborate closely with our clients to enhance their innovation system and make innovation happen.</p>
                        </div>
                    </div>
                    <div className="row mt-3" id="st_five_m">
                        <div className="col-md-5 align-self-center">
                            <img src="/p12.png" alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="col_side_heading">Business Strategy Development</h2>
                            <h6>Business Strategy developed to help you navigate the path to success</h6>
                            <p>Achieve your business goals with our expert strategy development consulting. We work with you to create a custom plan that takes into account your unique needs & objectives and guides you on the path to success.</p>
                        </div>

                    </div>
                </div>
                {/* <h5 className="our_team mt-3">Our Team</h5>
                <div className="row core_team">
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t1.jpg" alt="" />
                        </div>
                        <h5 >Anup Puthan</h5>
                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t2.jpg" alt="" />
                        </div>
                        <h5 >Arvind Maheswaram</h5>

                    </div>
                    <div className="col-md-3">
                        <div className="img_row_team">
                            <img src="/t3.jpg" alt="" />
                        </div>
                        <h5 >Gaurav Bhaskar</h5>

                    </div>
                </div> */}
                {/* <Row>
                    <Col>
                        <h1 className='ctitle'>
                            STRATEGY
                        </h1>
                        <p className='cbodyo'>
                            We understand that making strategic decisions can be challenging, especially in the post-pandemic environment. Our Strategy practice is here to help. We work with you to understand your unique needs and goals, and then develop a customized plan to help you achieve measurable results. Whether you're looking to grow your business, enter a new market, or drive innovation, we have the expertise and experience to help you make the right choices and achieve your strategic objectives
                        </p>
                    </Col>
                    <Col>
                        <ul className="strategy_li">
                            <li><a href="#section1">Core Business Transformation</a></li>
                            <li><a href="#section2">Branding, Positioning and Messaging</a></li>
                            <li><a href="#section3">Marketing and Go-To Market Strategy</a></li>
                            <li><a href="#section4">Innovation Strategy</a></li>
                            <li><a href="#section5">Business Strategy Development</a></li>
                        </ul>
                    </Col>
                </Row> */}
                {/* <Row className="startegy_page">
                    <div id="section1">
                        <h1 className='ctitle'>
                            Core Business Transformation
                        </h1>
                        <p className='cbodyo'>
                            Optimize business operations, drive product and service innovation, improve financial performance, accelerates speed to market,
                            and operates client platforms to innovate continuously.
                        </p>
                    </div>
                    <div id="section2">
                        <h1 className='ctitle'>
                            Branding, Positioning and Messaging
                        </h1>
                        <p className='cbodyo'>
                            Define brand identity and develop a messaging strategy to effectively communicate their value proposition to customers.
                        </p>
                    </div>
                    <div id="section3">
                        <h1 className='ctitle'>
                            Marketing and Go-To Market Strategy
                        </h1>
                        <p className='cbodyo'>
                            Implement effective marketing and go-to-market strategies to reach and engage their target audience, drive demand, and achieve business growth
                        </p>
                    </div>
                    <div id="section4">
                        <h1 className='ctitle'>
                            Innovation Strategy
                        </h1>
                        <p className='cbodyo'>
                            Identify opportunities for innovation and develop a plan to bring new products or services to market.
                        </p>
                    </div>
                    <div id="section5">
                        <h1 className='ctitle'>
                            Business Strategy Development
                        </h1>
                        <p className='cbodyo'>
                            Define vision, mission, and goals, and creating a plan to achieve them.
                        </p>
                    </div>
                </Row> */}
            </Container>
            <Footer />
        </>
    )
}