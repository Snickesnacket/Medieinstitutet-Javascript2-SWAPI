import { useEffect, useState } from 'react'
import {  Link, useParams,} from 'react-router-dom'
import { Vehicles, filmLink, theLink} from '../types'
import {  getVehicleId } from '../services/SWAPI'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const VehiclePage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Vehicles>()
    const { id } = useParams()
	const VehicleId = Number(id)
    const [film, setFilm] = useState<filmLink[]>()
    const [pilot, setPilot] = useState<theLink[]>()

    const getVehicle= async ( VehicleId: number) => {
        setError(null)
        setLoading(true)
        console.log('hello there!')

        try {
        const data = await getVehicleId( VehicleId)
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
    getVehicle( VehicleId)
}, [VehicleId]);

    return (
    
        <>
        {loading && <p>🤔 Loading...</p>}
            {data &&  (
                <div className="mb-3">
                        <div>
                        <h2>{data.name}</h2>
                        <p>Model: {data.model}</p>
                        <p>Vehicle class {data.vehicle_class}</p>
                        <p>Manifacturer: {data.manufacturer}</p>
                        <p>Length: {data.length}</p>
                        <p>Cost in credits: {data.cost_in_credits}</p>
                        <p>Crew: {data.crew}</p>
                        <p>Passengers: {data.passengers}</p>
                        <p> max_atmosphering_speed: {data.max_atmosphering_speed}</p>
                        <p>Cargo capacity: {data.cargo_capacity}</p>
                        <p>consumables: {data.consumables}</p>
                        <p>Created: {data.created}</p>
                        <p>Edited: {data.edited}</p>
                        {pilot && ( 
                                <div> 
                                    <h3>These are the pilots</h3>
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

 export default VehiclePage

