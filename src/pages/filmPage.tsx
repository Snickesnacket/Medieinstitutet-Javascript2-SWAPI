import { useEffect, useState } from 'react'
import {  Link, useParams,} from 'react-router-dom'
import { Film,  theLink } from '../types'
import {  getById } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const FilmPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [film, setFilm] = useState<Film>()
    const { id } = useParams()
	const filmId = Number(id)
    const [characters, setCharacters] = useState<theLink[]>();
    const [planets, setPlanets] = useState<theLink[]>();
    const [starships, setStarships] = useState<theLink[]>();
    const [vehicles, setVehicles] = useState<theLink[]>();
    const [species, setSpecies] = useState<theLink[]>()

    const getFilm= async ( filmId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getById<Film>('films', filmId)
        console.log("the data",data)
        setFilm(data)
        setCharacters(data.characters);
        setPlanets(data.planets)
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
                                <div> 
                                    <h3>These are the characters</h3>
                                <ListGroup className='mb-3'>
                                    {characters.map((item => (
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
                        {planets && ( 
                                <div> 
                                    <h3>These are the planets</h3>
                                <ListGroup className='mb-3'>
                                    {planets.map((item => (
                                        <ListGroupItem
                                            action
                                            key={item.id}
                                            variant='success'
                                        >
                                            <Link to={`/Planets/${item.id}`}>
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
                        {vehicles&& ( 
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

                        </div>
                </div>
            )}
        </>
    )

}

 export default FilmPage

