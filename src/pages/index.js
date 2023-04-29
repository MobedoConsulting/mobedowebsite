
import React from "react";
import '../styles/global.css';
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function index() {
  return (
    <>
      <Navbar />
      <Container fluid className="maincontainer font homepage">
        <img src="/p1.png" alt="" />
        <Row className="padding_content align-self-center">
          <Col md={7} sm={12} className="col_side_content">
            <p className="mb-0">Growth and transformation are ongoing processes and nothing is ever truly static. We understand that businesses and individuals face new opportunities and challenges every day and that it's crucial to adapt and evolve to stay ahead. We work alongside our clients in navigating this constant change and to unlock their potential for sustainable growth. </p>

          </Col>
          <Col className="align-self-center">
            <div md={5} sm={12} className="col_side_heading   text-center">
              <p className="being_cont mb-0">BEING TO BECOMING <br /> The <span> MOBEDO</span> Promise.</p>
            </div>
          </Col>
        </Row>
        <div className="row  margin-top-minus mb-4">
          <div className="col-md-8 col-sm-12">
            <div className="text-center ">
              <Link to="about"><Button className="button btn-warning">About us</Button>{' '}</Link>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>

        <img src="/p2.png" alt="" />
        <h2 className="p_h_title">Our Proposition</h2>
        <Row className="row_content padding_content">

          <ul className="mb-0 mb-text-center">
            <li>A <b> consecrated dedication</b> to working alongside our clients on their technology, strategy, and innovation needs</li>
            <li>A multidisciplinary team that goes a long way back with <b> mutual respect </b> for each other and with a balanced depth of expertise and experience that complements each others skills well</li>
            <li>A strategic ally for driving growth through innovative and data-driven solutions. We <b>break-free </b>from traditional consulting methods to unleash our clients' full potential</li>
            <li>An environment where engaged minds and subject matter experts work creatively and collaboratively to drive results. We welcome our clients, partners, and colleagues to join us in tackling challenges and turning ideas into action and drive <b> meaningful impact</b></li>
          </ul>

        </Row>
        <img src="/p3.png" alt="" />
        <h2 className="p_h_title">Our Practice Areas</h2>
        <Row className="row_content padding_content">
          <Col md={6} sm={12} className="align-self-center ">
            <div className="col_side_heading text-center">
              <p className="harmo_color">Harmonious Solutions.</p>
            </div>
          </Col>
          <Col md={6} sm={12} className="col_side_content align-self-center ">
            <p>There is an unusual coordination between entities of different types. The emergent is distinct from its component parts and cannot be reduced to the mere sum or difference of these parts. </p>
          </Col>

        </Row>

        <div className="row mt-2 mb-3">

          <div className="col-md-4 col_bg_sc">
            <Link to="/strategy">
              <div className="row">
                <div className="col-md-5">
                  <p className="mb-0">STRATEGY </p><p> CONSULTING</p>
                </div>
                <div className="col-md-5">
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col_bg_tc">
            <Link to="/technology">
              <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                  <p className="mb-0">TECHNOLOGY </p> <p>CONSULTING</p>
                </div>
                <div className="col-md-5">
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col_bg_dt">
            <Link to="/digital_transformation">
              <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                  <p className="mb-0">DIGITAL  </p>  <p>TRANSFORMATION</p>
                </div>
                <div className="col-md-5">
                </div>
              </div>
            </Link>
          </div>
        </div>


        {/* <Row>
        <Col>
          <video className="embed-responsive embed-responsive-16by9 video_content" controls>
            <source className="embed-responsive-item" src={samplevideo} type="video/mp4"></source>
          </video>
        </Col>
      </Row> */}
        <Row>
          {/* <div className="col_side_heading ">
            <p className="head">Unleashing Growth.</p>
          </div>
          <div className="col_side_content second-section">
            <p>
              We identify and build upon the strengths, successes, and positive aspects of your business to create a culture of positivity and innovation, driving sustainable growth and success. Our tailored approach will help you achieve your goals and reach new heights with a strengths-based approach
            </p>
          </div>
          <div className="text-center">
            <p className="col_side_content">
              Lets have a conversation<br />
              Email  Phone Social
            </p>
          </div> */}
          {/* <Col sm className="col_heading_row">
          <h3>Practices</h3>
          <p className="col_content">What we know.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Industries</h3>
          <p className="col_content">Where we go.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col>
        <Col sm className="col_heading_row">
          <h3>Solutuions</h3>
          <p className="col_content">How we deliver.</p>
          <Link to="about"><Button className="learnbutton" variant="outline-primary">Learn More</Button>{' '}</Link>
        </Col> */}
        </Row>
        {/* <Row>
        <div className="col_side_heading">
          <p>What sets us apart.</p>
        </div>
        <Col>
        <Carousel >
          <Carousel.Item interval={500} className="slide1">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide2">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
          <Carousel.Item interval={500} className="slide3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam ea esse quisquam a eius doloremque aperiam recusandae iusto. Maiores, illum odio possimus error fugiat sit. Neque modi unde recusandae?</p>
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col></Col>
      </Row> */}


        {/* <Row className="justify-content-md-center">
          <div className="col_side_heading head text-center">
            <p>Our Offerings</p>
          </div>
          <Col sm xs lg="2" className="col_heading_row_circle  text-center">
            <div className="circle ">
              <img className="bulb" src="../consulting.jpg" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >Consulting</h3>
          </Col>
          <Col sm xs lg="2" className="col_heading_row_circle">
            <div className="circle"></div>
            <h3 className="startup">Start Up</h3>
          </Col>
          <Col sm xs lg="2" className="col_heading_row_circle">
            <div className="circle"></div>
            <h3 className="products">Products</h3>
          </Col>
        </Row> */}
        {/* <Row className="justify-content-md-center">
      <div className="col_side_heading  text-center">
          <p>Our Offerings</p>
        </div>
      
        <Col sm className="col_heading_row  ">
          <div className="circle"></div>
          <h3 className="consulting" >Consulting</h3>
        </Col>
        <Col sm className="col_heading_row">
          <div className="circle"></div>
          <h3  className="startup">Start Up</h3>
        </Col>
        <Col sm className="col_heading_row">
          <div className="circle"></div>
          <h3 className="products">Products</h3>
        </Col>
       
      </Row> */}


        {/* <Row>
          <div className="col_side_heading text-center head">
            <p>Why Mobedo</p>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
          </p>
          <p className=" text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quibusdam, amet quasi saepe sapiente rem nemo dolores quos, libero quas corporis repellat sequi eos commodi magnam alias ex. Aliquam, esse.
          </p>
          <Col sm className="col_heading_row  col_heading_row_circle ">
            <div className="circle   ">
              <img className="bulb" src="../bulb.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >INNOVATION</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla omnis laboriosam doloribus nobis velit ducimus magni labore voluptatum animi totam ipsam perferendis, quaerat saepe maiores rerum possimus necessitatibus quod!</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="thumb" src="../thumb.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >QUALITY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="clock" src="../clock.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >EXPERIENCE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="people" src="../people.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >HAPPY CLIENTS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
          <Col sm className="col_heading_row">
            <div className="circle">
              <img className="message" src="../message.png" alt="this is innovation"></img>
            </div>
            <h3 className="consulting" >SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fugit voluptates necessitatibus? Blanditiis sint quaerat provident ex vero laborum. Facilis eos esse tempore commodi similique! Quis ea omnis necessitatibus?</p>
          </Col>
        </Row> */}
      </Container>
      <Footer />
    </>
  )

}
