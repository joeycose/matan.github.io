import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

export default function MainNav() {
    return (
        <Navbar style={{ backgroundColor: "black" }} id="NavbarMain" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand style={{ padding: "6px" }} href="#">Matan Evenoff</Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ fontSize: "15px", color: "white" }} className={`me-auto`}>
                        <Nav.Link style={{ color: "white" }} href="https://www.twitch.tv/matanevens">Twitch</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="https://www.instagram.com/matanevenoff/?hl=en">Instagram</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="https://www.youtube.com/channel/UC0zYzxRCvUD5p1XWwE00Zzw">Youtube</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="#discord">Discord</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="https://www.tiktok.com/@mataneven?lang=en">TikTok</Nav.Link>
                    </Nav>
                    <Nav className={`d-flex align-items-center`} style={{ fontSize: "15px" }}>
                        <Nav.Link style={{ color: "white" }} href="#merch">Merch</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="#positions">Positions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
