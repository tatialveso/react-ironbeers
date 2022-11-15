import axios from "axios"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function NewBeer({ apiURL }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`${apiURL}/new`, form)
            console.log("Cadastro feito!")
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira o nome do personagem"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ocupação</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a ocupação do personagem"
                        name="tagline"
                        onChange={handleChange}
                        value={form.tagline}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="description"
                        onChange={handleChange}
                        value={form.description}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="first_brewed"
                        onChange={handleChange}
                        value={form.first_brewed}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="brewers_tips"
                        onChange={handleChange}
                        value={form.brewers_tips}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="attenuation_level"
                        onChange={handleChange}
                        value={form.attenuation_level}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="contributed_by"
                        onChange={handleChange}
                        value={form.contributed_by}
                    />
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default NewBeer