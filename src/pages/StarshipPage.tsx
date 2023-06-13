import { useEffect, useState } from 'react'
import {  Link, useParams,} from 'react-router-dom'
import { Starship, filmLink, theLink,} from '../types'
import {  getStarshipId,  } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const StarshipPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Starship>()
    const { id } = useParams()
	const starshipId = Number(id)
    const [film, setFilm] = useState<filmLink[]>()
    const [pilot, setPilot] = useState<theLink[]>()

    const getStarship= async ( starshipId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getStarshipId('starships', starshipId)
        console.log("the data",data)
        setData(data)
        setFilm(data.films);
        setPilot(data.pilots)
        
        

        } catch(err: any) { 
        setError(err.message)
        console.log(" this is the error",err.message)
        }
        setLoading(false)
    
    }
    console.log("the outside")

    useEffect(() => {
    getStarship( starshipId)
}, [starshipId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {data &&  (
                <div className="mb-3">
                        <div>
                        <h2>{data.name}</h2>
                        <p>Model: {data.model}</p>
                        <p>starship class {data.starship_class}</p>
                        <p>Manifacturer: {data.manufacturer}</p>
                        <p>Cost in credits: {data.cost_in_credits}</p>
                        <p>Length: {data.length}</p>
                        <p>Crew: {data.crew}</p>
                        <p>Passengers: {data.passengers}</p>
                        <p> max_atmosphering_speed: {data.max_atmosphering_speed}</p>
                        <p>Hyperdrive rating: {data.hyperdrive_rating}</p>
                        <p>MGLT: {data.MGLT}</p>
                        <p>consumables: {data.consumables}</p>
                        <p>Created: {data.created}</p>
                        <p>Edited: {data.edited}</p>
                        {pilot && ( 
                                <div> 
                                    <h3>These are the characters</h3>
                                <ListGroup className='mb-3'>
                                    {pilot.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/People/${item.id}`}>
                                            <p>{item.name}</p>
                                            </Link>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div> 
                        )}
                        {film && ( 
                                <div> 
                                    <h3>These are the planets</h3>
                                <ListGroup className='mb-3'>
                                    {film.map((item => (
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

 export default StarshipPage

