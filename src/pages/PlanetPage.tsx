import { useEffect, useState } from 'react'
import {  Link, useParams, useNavigate} from 'react-router-dom'
import { Person, filmLink, theLink} from '../types'
import {  getPersonId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const PlanetPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState<Person>()
    const { id } = useParams()
	const personId = Number(id)
    const [starships, setStarships] = useState<theLink[]>();
    const [vehicles, setVehicles] = useState<theLink[]>();
    const [species, setSpecies] = useState<theLink[]>()
    const navigate = useNavigate();

    const getPerson = async ( personId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getPersonId('people', personId)
        console.log("the data",data)
        setPerson(data)
        setStarships(data.starships)
        setVehicles(data.vehicles)
        setSpecies(data.species)
        

        } catch(err: any) { 
        setError(err.message)
        console.log(" this is the error",err.message)
        }
        setLoading(false)
    
    }
    console.log("the outside")

    useEffect(() => {
    getPerson( personId)
}, [personId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {person && (
                <div className="mb-3">
                        <div>
                        <h2>{person.name}</h2>
                        <p>Eyecolor : {person.eye_color}</p>
                        <p>Haircolor: {person.hair_coor}</p>
                        <p>Born: {person.birth_year}</p>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Skincolor: {person.skin_color}</p>
                        <p>Created: {person.created}</p>
                        <p>Homeword: {person.homeworld.name}</p>
                        <div>   
                            <h3>These are the films</h3>
                            <ListGroup className='mb-3'>
                                {person.films.map(film => (
                                <ListGroupItem
                                    action
                                    key={film.id}
                                    variant='success'
                                >
                                    <Link to={`/Films/${film.id}`}>
                                    <p>{film.title}</p>
                                    </Link>
                                </ListGroupItem>
                                ))}
                            </ListGroup>
                            </div>
                            {species&& ( 
                                <div> 
                                    <h3>These are the species</h3>
                                <ListGroup className='mb-3'>
                                    {species.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/Species/${item.id}`}>
                                            <p>{item.name}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
                        {starships&& ( 
                                <div> 
                                    <h3>These are the starships</h3>
                                <ListGroup className='mb-3'>
                                    {starships.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/Starships/${item.id}`}>
                                            <p>{item.name}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
                        {vehicles && ( 
                                <div> 
                                    <h3>These are the vehicles</h3>
                                <ListGroup className='mb-3'>
                                    {vehicles.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/Vehicles/${item.id}`}>
                                            <p>{item.name}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
                        </div>
                </div>
            )}
        </>
    )

}

 export default PlanetPage

