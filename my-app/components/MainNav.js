import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './MainNav.module.css';



export default function MainNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className={`me-auto ${styles.navLinks}`}>
                    <Nav.Link href="#twitch">Twitch</Nav.Link>
                    <Nav.Link href="#instagram">Instagram</Nav.Link>
                    <Nav.Link href="#tiktok">Youtube</Nav.Link>
                    <Nav.Link href="#tiktok">Discord</Nav.Link>
                    <Nav.Link href="#tiktok">TikTok</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
