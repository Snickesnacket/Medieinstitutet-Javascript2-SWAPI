import { useEffect, useState } from 'react'
import {  useParams,} from 'react-router-dom'
import { Film} from '../types'
import {  getFilmId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const PersonPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [film, setFilm] = useState<Film>()
    const { id } = useParams()
	const filmId = Number(id)

    const getFilm= async ( personId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getFilmId('people', personId)
        console.log("the data",data)
        setFilm(data)
        

        } catch(err: any) { 
        setError(err.message)
        console.log(" this is the error",err.message)
        }
        setLoading(false)
    
    }
    console.log("the outside")

    useEffect(() => {
    getFilm( filmId)
}, [filmId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {film && (
                <div className="mb-3">
                        <div>
                        <h2>{film.title}</h2>
                        <p>Episode id : {film.id}</p>
                        <p>opening crawler {film.opening_crawl}</p>
                        <p>Director: {film.director}</p>
                        <p>Producer: {film.producer}</p>
                        <p>Release date: {film.release_date}</p>
                        <p>Created {film.created}</p>
                        <p>Edited: {film.edited}</p>
                        <div>
                        <ListGroup className='mb-3'>
                        <p>Charachters: {film.carachters.map(charachter => 
                                        <ListGroupItem
                                            action
                                            key={film.id}
                                    ><p>{film.title}</p>
                                    </ListGroupItem>
                            )}</p></div>
                        <div> 
                                
                            
                                    ))}
                                </ListGroup>
                            </div>
                        </div>
                </div>
            )}
        </>
    )

}

 export default PersonPage

