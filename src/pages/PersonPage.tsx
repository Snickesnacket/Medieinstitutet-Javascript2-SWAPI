import { useEffect, useState } from 'react'
import { useNavigate, useParams,} from 'react-router-dom'
import { Person } from '../types'
import {  getId } from '../services/SWAPI'

const PersonPage = () => {
    const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState<Person| null>(null)
    const navigate = useNavigate()
    const { id } = useParams()
	const todoId = Number(id)
    const [endpoint, setEndpoint] = useState('people') 

    const getPerson = async (id: number) => {
        setError(null)
        setLoading(false)

        try {
        const  data = await getId(endpoint, id)
        setPerson(data)
        }
    }

    return (
    <div>PersonPage</div>
    )
}

export default PersonPage