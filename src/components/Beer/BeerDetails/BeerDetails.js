import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function BeerDetails({ apiURL, beer, setBeer }) {
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${apiURL}/${id}`)
            .then(response => {
                setBeer(response.data)
            })
            .catch(error => console.log(error))
    }, [id])

    return(
        <div>
            <img src={beer.image_url} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails