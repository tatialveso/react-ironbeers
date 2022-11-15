import './BeerList.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

function BeerList() {
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"
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
                            <Col>
                                <Card className="d-flex flex-row m-3">
                                    <Card.Img style={{ width:'4rem'}} variant="top" src={beer.image_url} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`/beers/${beer.id}`}>
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