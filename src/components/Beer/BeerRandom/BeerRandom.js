import axios from "axios"
import { useEffect } from "react"

function BeerRandom({ apiURL, beer, setBeer }) {
    useEffect(() => {
        axios.get(`${apiURL}/random`)
            .then(response => setBeer(response.data))
    }, [])

    return (
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

export default BeerRandom