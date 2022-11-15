import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

function BeerList({ apiURL }) {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(apiURL)
            .then(response => setBeers(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            <Row>
                {
                    beers.map((beer) => {
                        return (
                            <Col key={beer._id}>
                                <Card className="d-flex flex-row m-3">
                                    <Card.Img style={{ width:'4rem'}} variant="top" src={beer.image_url} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`/beers/${beer._id}`}>
                                                {beer.name}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>{beer.tagline}</Card.Text>
                                        <Card.Text>{beer.contributed_by}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default BeerList