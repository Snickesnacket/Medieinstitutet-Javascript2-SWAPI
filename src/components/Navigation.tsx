import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Star Wars API</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/Films">Films</Nav.Link>
                        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                        <Nav.Link as={NavLink} to="/Planets">Planets</Nav.Link>
                        <Nav.Link as={NavLink} to="/Starships">Starships</Nav.Link>
                        <Nav.Link as={NavLink} to="/Species">Species</Nav.Link>
                        <Nav.Link as={NavLink} to="/Vehicles">Vehicles</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation

// add end? 