import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import allBeersImg from '../../assets/beers.png'
import newBeerImg from '../../assets/new-beer.png'
import randomBeerImg from '../../assets/random-beer.png'

function HomePage() {
    return (
        <Container className="h-100">
            <Row className="align-items-center h-100">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={allBeersImg} />
                        <Card.Body>
                            <Card.Title>
                                <Link className="nav-link" to="/beers">All Beers</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={randomBeerImg} />
                        <Card.Body>
                            <Card.Title>
                                <Link className="nav-link" to="/random-beer">Random Beer</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={newBeerImg} />
                        <Card.Body>
                            <Card.Title>
                                <Link className="nav-link" to="/new-beer">New Beer</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage