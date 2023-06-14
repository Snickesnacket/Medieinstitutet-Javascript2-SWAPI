import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h1>Sorry, that page could not be found 😢!</h1>

			<Link to="/">
				<Button variant="primary">To the start page</Button>
			</Link>
		</>
	)
}

export default NotFound
