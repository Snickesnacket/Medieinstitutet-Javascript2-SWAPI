import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams,} from 'react-router-dom'
import { Person, srchResponse } from '../types'
import {  getId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const PersonPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState<Person>()
    const { id } = useParams()
	const personId = Number(id)
    const [searchresult, setSearchresult] = useState<Person[]>()

    const getPerson = async ( personId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getId('people', personId)
        console.log("the data",data)
        setPerson(data)

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
                                <ListGroup className='mb-3'>
                            
                                    {person.films.map(film => (
                                        <ListGroupItem
                                            action
                                            key={film.id}
                                    ><p>{film.title}</p>
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

export default PersonPage
