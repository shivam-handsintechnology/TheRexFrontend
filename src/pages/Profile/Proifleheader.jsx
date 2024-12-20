import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "@/assets/logo.svg"
import setting from "@/assets/settingicon.svg"
import language from "@/assets/languageicon.svg"
import logins from "@/assets/loginicon.svg"

const Profileheader = () => {

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
                                    <a href="" className='anchor-header'><img src={language} alt="" /> <span>English</span></a>
                                    <a href="" className='anchor-header'><img src={setting} alt="" /></a>
                                    <a href="" className='anchor-header'><img src={logins} alt="" style={{height:'50px',width:'50px'}} /></a>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Profileheader
