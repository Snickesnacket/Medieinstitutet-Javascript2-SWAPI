import { useEffect, useState } from 'react'
import {  Link, useParams} from 'react-router-dom'
import { Person, Planet, filmLink} from '../types'
import {  getById} from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const PlanetPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [planet, setPlanet] = useState<Planet>()
    const { id } = useParams()
	const planetId = Number(id)
    const [person, setPerson] = useState<Person[]>();
    const [films, setFilms] = useState<filmLink[]>();


    const getPlanet = async ( planetId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getById<Planet>('planets', planetId);
        console.log("the data",data)
        setPlanet(data)
        setPerson(data.residents)
        setFilms(data.films)
        
        

        } catch(err: any) { 
        setError(err.message)
        console.log(" this is the error",err.message)
        }
        setLoading(false)
    
    }
    console.log("the outside")

    useEffect(() => {
    getPlanet( planetId)
}, [planetId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {planet && (
                <div className="mb-3">
                        <div>
                        <h2> {planet.name}</h2>
                        <p>Rotation_period: {planet.rotation_period}</p>
                        <p>orbital_period: {planet.orbital_period}</p>
                        <p>diameter: {planet.diameter}</p>
                        <p>climate: {planet.climate}</p>
                        <p>gravity: {planet.gravity}</p>
                        <p>terrain: {planet.terrain}</p>
                        <p>surface water: {planet.surface_water}</p>
                        <p>population: {planet.population}</p>
                        <p>Created: {planet.created}</p>
                        <p>Edited: {planet.edited}</p>
                        {person && ( 
                                <div> 
                                    <h3>These are the Residents</h3>
                                <ListGroup className='mb-3'>
                                    {person.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/people/${item.id}`}>
                                            <p>{item.name}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
                        {films && ( 
                                <div> 
                                    <h3>These are the Films</h3>
                                <ListGroup className='mb-3'>
                                    {films.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/films/${item.id}`}>
                                            <p>{item.title}</p>
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

