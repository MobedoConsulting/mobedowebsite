import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navitem() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="#ffffff" variant="light" className="maincontainer sticky-top">
        <Container className='Navbarpage'>
          <Link to="/">
            <Navbar.Brand >
              <img src="/mobedologo1.png"
                width="150px"

                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav className='navitems'>
              {/* <Link to="/"><Nav className='navlist'  >Home</Nav></Link> */}
              {/* <div className="dropdown">
                <button className="dropbtn navlist">SERVICES
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to='/starategy'> Strategy</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/technology'>Technology</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/digital_transformation'>Digital Transformation</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/shared_services'>Shared Services</Link></NavDropdown.Item>
                </div>
              </div> */}
              <div className="dropdown">
                <button className="dropbtn navlist">SERVICES
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="collasible-nav-dropdown">
                  <div className='dropdown-new'>
                    
                    {/* <li className="dropbtn navlist">Strategy</li> */}
                    
                    <Link to='/strategy'>
                      Strategy
                    </Link>
                    <div className="dropdown-content-new" id="collasible-nav-dropdown-new">
                      <div className='desktop_view'>
                        <NavDropdown.Item><Link to='/strategy/#st_one'> Core Business Transformation</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/strategy/#st_two'>Branding, Positioning & Messaging</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/strategy/#st_three'>Marketing & Go-To-Market Strategy</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/strategy/#st_four'> Innovation Strategy</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/strategy/#st_five'>Business Strategy Development</Link></NavDropdown.Item>
                      </div>
                      {/* <div className='mobile_view'>
                        <NavDropdown.Item><Link to='/strategy/#st_one_m'> Core Business Transformation</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/strategy/#st_two_m'>Branding, Positioning & Messaging</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/strategy/#st_three_m'>Marketing & Go-To-Market Strategy</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/strategy/#st_four_m'> Innovation Strategy</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/strategy/#st_five_m'>Business Strategy Development</Link></NavDropdown.Item>
                      </div> */}
                    </div>
                  </div>
                  <div className='dropdown-new-two'>
                    {/* <li className="dropbtn navlist">Technology</li> */}
                    <Link to='/technology'>
                     Technology
                    </Link>
                    <div className="dropdown-content-new-two" id="collasible-nav-dropdown-new-two">
                      <div className='desktop_view'>
                        <NavDropdown.Item><Link to='/technology/#t_one'> Enterprise Applications</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_two'>Technology Solutions Delivery</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/technology/#t_three'>WEB3</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/technology/#t_four'> CyberSecurity Services</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_five'>UI/UX Strategy & Design</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_six'>Metaverse</Link></NavDropdown.Item>
                      </div>
                      {/* <div className='mobile_view'>
                        <NavDropdown.Item><Link to='/technology/#t_one_m'> Enterprise Applications</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_two_m'>Technology Solutions Delivery</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/technology/#t_three_m'>WEB3</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/technology/#t_four_m'> CyberSecurity Services</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_five_m'>UI/UX Strategy & Design</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/technology/#t_six_m'>Metaverse</Link></NavDropdown.Item>
                      </div> */}
                    </div>
                  </div>
                  <div className='dropdown-new-three'>
                    <Link to='/digital_transformation/'>
                    Digital Transformation
                    </Link>
                    {/* <li className="dropbtn navlist">Digital Transformation</li> */}
                    <div className='desktop_view'>
                      <div className="dropdown-content-new-three" id="collasible-nav-dropdown-new-three">
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_one'> Digital Strategy Development</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_two'>Data Science and Analytics</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_three'>DEVOPS and Cloud services</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_four'> Automation</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_five'>Mobility</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_six'>Digital Marketing</Link></NavDropdown.Item>
                      </div>
                    </div>
                    {/* <div className='mobile_view'>
                      <div className="dropdown-content-new-three" id="collasible-nav-dropdown-new-three">
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_one_m'> Digital Strategy Development</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_two_m'>Data Science and Analytics</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_three_m'>DEVOPS and Cloud services</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/digital_transformation/#dg_four_m'> Automation</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_five_m'>Mobility</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/digital_transformation/#dg_six_m'>Digital Marketing</Link></NavDropdown.Item>
                      </div>
                    </div> */}
                  </div>
                  <div className='dropdown-new-four'>
                    <Link to='/shared_services'>
                    Shared Services
                    </Link>
                    {/* <li className="dropbtn navlist">Shared Services</li> */}
                    <div className='desktop_view'>
                      <div className="dropdown-content-new-four" id="collasible-nav-dropdown-new-four">
                        <NavDropdown.Item><Link to='/shared_services/#sh_one'> Co-Founder as Service</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/shared_services/#sh_two'>MVP as a Service</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/shared_services/#sh_three'>Innovation as a Service</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/shared_services/#sh_four'>Testing as a Service</Link></NavDropdown.Item>
                      </div>
                    </div>
                    {/* <div className='mobile_view'>
                      <div className="dropdown-content-new-four" id="collasible-nav-dropdown-new-four">
                        <NavDropdown.Item><Link to='/shared_services/#sh_one_m'> Co-Founder as a Service</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/shared_services/#sh_two_m'>MVP as a Service</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/shared_services/#sh_three_m'>Innovation as a Service</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/shared_services/#sh_four_m'>Testing as a Service</Link></NavDropdown.Item>
                      </div>
                    </div> */}

                  </div>

                </div>
              </div>

              <div className="dropdown" >
                <button className="dropbtn navlist">ABOUT US
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  {/* <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item> */}
                </div>
              </div>
              {/* <NavDropdown className='navlist' title="Services" id="collasible-nav-dropdown">
                <div className=''>
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown className='navlist' title="About Us" id="collasible-nav-dropdown">
                <div className=''>
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item>
                </div>
              </NavDropdown> */}
              <Link to="/careers"><Nav className='navlist' >CAREERS</Nav></Link>
              {/* <Link to="/blog"><Nav className='navlist' > Blog</Nav></Link> */}
              <Link to="/contact"><Nav className='navlist btn_nav_list'   > <Button variant="warning">CONNECT WITH US</Button>{' '} </Nav></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navitem;
