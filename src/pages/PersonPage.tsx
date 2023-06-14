import { useEffect, useState } from 'react'
import {  Link, useParams} from 'react-router-dom'
import { Person, filmLink, theLink} from '../types'
import { getById} from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const PersonPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Person>()
    const { id } = useParams()
	const personId = Number(id)
    const [starships, setStarships] = useState<theLink[]>();
    const [vehicles, setVehicles] = useState<theLink[]>();
    const [species, setSpecies] = useState<theLink[]>()
    const [film, setFilm] = useState<filmLink[]>()
 

    const getPerson = async (personId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getById<Person>('people', personId);
        console.log("the data",data)
        setData(data)
        setStarships(data.starships)
        setVehicles(data.vehicles)
        setSpecies(data.species)
        setFilm(data.films)
        

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
            {data && (
                <div className="mb-3">
                        <div>
                        <h2>{data.name}</h2>
                        <p>Eyecolor : {data.eye_color}</p>
                        <p>Haircolor: {data.hair_coor}</p>
                        <p>Born: {data.birth_year}</p>
                        <p>Height: {data.height}</p>
                        <p>Mass: {data.mass}</p>
                        <p>Skincolor: {data.skin_color}</p>
                        <p>Created: {data.created}</p>
                        <p>Homeword: {data.homeworld.name}</p>
                        {film && ( 
                                <div> 
                                    <h3>These are the films</h3>
                                <ListGroup className='mb-3'>
                                    {film.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/Films/${item.id}`}>
                                            <p>{item.title}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
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

 export default PersonPage

