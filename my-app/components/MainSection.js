import { Card, Container, Row, Col } from 'react-bootstrap';

function MainSection(props) {
    // Variables
    let quote = '“Hey Martin, you know real quick I want to thank everybody and say that I think I want to nominate this award to my reformed Orthodox Rabbi Bill Clinton."';
    let name = ' - Matan Even';
    let placeholder = 'Array of Recent Videos, Streams, or Tweets';
    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={10} className="mb-4">
                    <Card bg="dark" text="light" style={{ padding: '2px', margin: '10px 4px', borderRadius: '4px' }}>
                        <Card.Body>
                            <Card.Text style={{ color: "Lightgrey" }}>
                                {quote}
                            </Card.Text>
                            <Card.Text style={{ color: "Lightgrey", textAlign: "right" }}>
                                {name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card bg="dark" text="light" style={{ padding: '2px', margin: '10px 4px', borderRadius: '4px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: "Lightgrey" }}>Videos : <Card.Link href="https://www.youtube.com/channel/UC0zYzxRCvUD5p1XWwE00Zzw">Youtube</Card.Link> </Card.Title>
                            <Card.Text>
                                {placeholder}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card bg="dark" text="light" style={{ padding: '2px', margin: '10px 4px', borderRadius: '4px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: "Lightgrey" }}>Live Stream : <Card.Link href="https://www.twitch.tv/matanevens">Twitch</Card.Link> </Card.Title>
                            <Card.Text>
                                {placeholder}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={10} className="mt-4">
                    <Card bg="dark" text="light" style={{ padding: '2px', margin: '10px 4px', borderRadius: '4px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: "Lightgrey" }}>Twitter Feed : <Card.Link href="https://twitter.com/matanevenoff?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</Card.Link> </Card.Title>
                            <Card.Text>
                                {placeholder}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MainSection;
