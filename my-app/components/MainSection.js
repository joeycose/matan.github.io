import { Card, Container, Row, Col } from 'react-bootstrap';

function MainSection() {
    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={5}>
                    <Card bg="dark" text="light" style={{ padding: '4px', margin: '10px 4px', borderRadius: '10px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: "Lightgrey" }}>Videos : <Card.Link href="https://www.youtube.com/channel/UC0zYzxRCvUD5p1XWwE00Zzw">Youtube</Card.Link> </Card.Title>
                            <Card.Text>
                                This is some text within the first card body.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card bg="dark" text="light" style={{ padding: '4px', margin: '10px 4px', borderRadius: '10px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: "Lightgrey" }}>Live Stream : <Card.Link href="https://www.twitch.tv/matanevens">Twitch</Card.Link> </Card.Title>
                            <Card.Text>
                                This is some text within the second card body.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MainSection;
