import { useEffect, useState } from 'react'
import {  useParams,} from 'react-router-dom'
import { Film, charactersLink} from '../types'
import {  getFilmId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import { NavItem } from 'react-bootstrap'

const PersonPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [film, setFilm] = useState<Film>()
    const { id } = useParams()
	const filmId = Number(id)
     const [characters, setCharacters] = useState<charactersLink[]>();

    const getFilm= async ( filmId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getFilmId('films', filmId)
        console.log("the data",data)
        setFilm(data)
        setCharacters(data.characters);
        

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
            {film &&  (
                <div className="mb-3">
                        <div>
                        <h2>{film.title}</h2>
                        <p>Episode id : {film.id}</p>
                        <p>opening crawler {film.opening_crawl}</p>
                        <p>Director: {film.director}</p>
                        <p>Producer: {film.producer}</p>
                        <p>Release date: {film.release_date}</p>
                        <p>Created {film.created}</p>
                        <p>Edited {film.edited}</p>
                        {characters && ( 
                                <div> These are the Characters
                                <ListGroup className='mb-3'>
                                    {characters.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                    ><p>{item.name}</p>
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

