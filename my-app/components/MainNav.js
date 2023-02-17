import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import styles from './MainNav.module.css';

export default function MainNav() {
    return (
        <Navbar className={`${styles.NavMain}`} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className={` ${styles.centeredLink}`} href="#">Matan Evenoff</Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`me-auto ${styles.navLinks}`}>
                        <Nav.Link href="#twitch">Twitch</Nav.Link>
                        <Nav.Link href="#instagram">Instagram</Nav.Link>
                        <Nav.Link href="#youtube">Youtube</Nav.Link>
                        <Nav.Link href="#discord">Discord</Nav.Link>
                        <Nav.Link href="#tiktok">TikTok</Nav.Link>
                    </Nav>
                    <Nav className={`${styles.navLinksTwo} d-flex align-items-center`}>
                        <Nav.Link href="#merch">Merch</Nav.Link>
                        <Nav.Link href="#positions">Positions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
