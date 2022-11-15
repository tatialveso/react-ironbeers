import { Container, Navbar } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    
    const location = useLocation()
    if(location.pathname === "/") {
        return null
    }

    return (
        <Navbar bg="light">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand>
                    <img
                        src="https://img.icons8.com/windows/512/home-page.png"
                        width="30"
                        height="30"
                        alt="Ícone de Página inicial"
                        onClick={() => navigate("/")}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header