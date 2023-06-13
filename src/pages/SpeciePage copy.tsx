import { useEffect, useState } from 'react'
import {  Link, useParams,} from 'react-router-dom'
import { Species, filmLink, theLink} from '../types'
import {  getSpecieId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const SpeciePage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Species>()
    const { id } = useParams()
	const specieId = Number(id)
    const [film, setFilm] = useState<filmLink[]>()
    const [people, setPeople] = useState<theLink[]>()

    const getSpecie = async ( personId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getSpecieId('specie', personId)
        console.log("the data",data)
        setData(data)
        setPeople(data.people);
        setFilm(data.film)
        
        

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
                        <p>Haircolor: {data.hair_coor}</p>
                        <p>Skincolor: {data.skin_color}</p>
                        <p>Language: {data.language}</p>
                        <p>Created: {data.created}</p>
                        <p>Edited: {data.edited}</p>
                        <p>Homeword: {data.homeworld.name}</p>
                        <div>   
                            <h3>These are the people</h3>
                            <ListGroup className='mb-3'>
                                {data.people.map(item => (
                                <ListGroupItem
                                    action
                                    key={item.id}
                                    variant='success'
                                >
                                    <Link to={`/people/${item.id}`}>
                                    <p>{item.name}</p>
                                    </Link>
                                </ListGroupItem>
                                ))}
                            </ListGroup>
                            </div>

                            <div>   
                            <h3>These are the Films</h3>
                            <ListGroup className='mb-3'>
                                {data.film.map(item => (
                                <ListGroupItem
                                    action
                                    key={item.id}
                                    variant='success'
                                >
                                    <Link to={`/films/${item.id}`}>
                                    <p>{item.title}</p>
                                    </Link>
                                </ListGroupItem>
                                ))}
                            </ListGroup>
                            </div>
                        </div>
                </div>
            )}
        </>
    )

}

 export default SpeciePage

