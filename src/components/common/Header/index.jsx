import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "@/assets/logo.svg"
import { Dropdown, Row, Col } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {

    const token = localStorage.getItem('token');
    const userdata = JSON.parse(localStorage.getItem('user'));

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    return (
        <div>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand}>
                    <Container fluid className='header-fluid'>
                        <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={logo} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">About Us</Nav.Link>
                                    <Nav.Link href="#action2">Services</Nav.Link>
                                    {token &&
                                        <Nav.Link as={Link} to={"/JobSection"} >Hire/Get Hired</Nav.Link>
                                    }
                                    <Nav.Link href="#action2">Blogs</Nav.Link>
                                    <Nav.Link href="#action2">Contact Us</Nav.Link>
                                </Nav>
                                {!token ? (
                                    <>
                                        <div className="header-button" style={{ marginRight: '10px' }}>
                                            <a href="/register" className="th-btn ml-20 loginn">
                                                <i className="fas fa-user" />
                                                Register
                                            </a>
                                        </div>
                                        <div className="header-button">
                                            <a href="/login" className="th-btn ml-20 loginn">
                                                <i className="fas fa-user" />
                                                Login
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                                {`${userdata?.company_details?.business_name}`}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {/* <Dropdown.Item href="/Profile">My Profile</Dropdown.Item> */}
                                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </>
                                )}

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Header
