import Form from 'react-bootstrap/Form'

import ListGroup from 'react-bootstrap/ListGroup'

import { getAll } from '../services/SWAPI'

import { srchResponse } from '../types'

export const PeoplePage = () => {

    const [error, setError] = useState<string|null>(null)

	const [loading, setLoading] = useState(true)

    const [people, setPeople] = useState< srchResponse|null>()


    const getPeople = async () => {

            setError(null)

            setLoading(true)

        try{

            const res = await getAll<srchResponse>()

            setPeople(res)

            console.log(res.data)

        }catch (err: any) {

            setError(err.message)

        }

    }

    console.log(people)

    useEffect(() => {

        getPeople()

    },[])


return (

<>
		<h1>All the people</h1>

		{people && (

			<div id="search-result">


				<ListGroup className="mb-3">

					{people.data.map(data => (

						<ListGroup.Item

							action

							href={''}

							key={data.id}
						>
							<h2 className="h3">{data.name}</h2>

							<p className="text-muted small mb-0">

								Height: {data.height} Date of birth: {data.birth_year} Created at: {data.created}

							</p>

						</ListGroup.Item>

					))}

				</ListGroup>

			</div>

		)} 

	</>

)

}




export default PeoplePage