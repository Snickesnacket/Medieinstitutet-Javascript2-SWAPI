import { ListGroup } from 'react-bootstrap'
import  useGetData  from '../hooks/useGetData'
import { useEffect } from 'react'
import Pagination from '../components/Pagination'

export const PeoplePage = () => {
	const { data, setUrl, setPage } = useGetData('')

	useEffect(()=> {
		setUrl('https://swapi.thehiveresistance.com/api/people/')
	},[])

return (
    <>
			<h1>All the people</h1>
            
			{data && (
				<div id="search-result">
					<ListGroup className="mb-3">
						{data.data.map(data => (
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

					<Pagination
						page={data.current_page + 1}
						totalPages={data.total}
						hasPreviousPage={data.current_page > 0}
						hasNextPage={data.current_page + 1 < data.total}
						onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
						onNextPage={() => { setPage(prevValue => prevValue + 1) }}
					/> 
				</div>
			)} 
		</>
)
}

export default PeoplePage