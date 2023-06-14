import { useEffect, useState } from 'react'
import {  Link, useParams,} from 'react-router-dom'
import { Species, FilmLink, TheLink} from '../types'
import {  getById } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const SpeciePage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Species>()
    const { id } = useParams()
	const specieId = Number(id)
    const [film, setFilm] = useState<FilmLink[]>()
    const [people, setPeople] = useState<TheLink[]>()

    const getSpecie = async ( specieId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getById<Species>('species', specieId);
        console.log("the data",data)
        setData(data)
        setPeople(data.people);
        setFilm(data.films)
        
        

        } catch(err: any) { 
        setError(err.message)
        console.log(" this is the error",err.message)
        }
        setLoading(false)
    
    }
    console.log("the outside")

    useEffect(() => {
    getSpecie( specieId)
}, [specieId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {data && (
                <div className="mb-3">
                        <div>
                        <h2>{data.name}</h2>
                        <p>Classification : {data.classification}</p>
                        <p>Designation: {data.designation}</p>
                        <p>Average height: {data.average_height}</p>
                        <p>Lifespan: {data.average_lifespan}</p>
                        <p>Eyecolor: {data.eye_color}</p>
                        <p>Haircolor: {data.hair_color}</p>
                        <p>Skincolor: {data.skin_color}</p>
                        <p>Language: {data.language}</p>
                        <p>Created: {data.created}</p>
                        <p>Edited: {data.edited}</p>
                        <p>Homeword: {data.homeworld.name}</p>
                        {people && ( 
                                <div> 
                                    <h3>These are the characters</h3>
                                <ListGroup className='mb-3'>
                                    {people.map((item => (
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
                        </div>
                </div>
            )}
        </>
    )

}

 export default SpeciePage

