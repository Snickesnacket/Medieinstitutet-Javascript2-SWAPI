import { useState, useEffect,} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {  getAll, getAllByQuery } from "../services/SWAPI";
import {  SearchResponse, Planet} from "../types";
import Pagination from "../components/Pagination";
import { useSearchParams, Link, } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

export const PlanetsPage = () => {
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(true)
const  [data, setData] = useState<SearchResponse<Planet>|null>(null) //svaret 
const [searchParams, setSearchParams] = useSearchParams({query: '', page:'1'})
const [searchResult, setSearchResult] = useState<SearchResponse<Planet>|null>(null)
const page = searchParams.get('page'|| "1")
const query = searchParams.get('query')
const [searchInput, setSearchInput] = useState('')

const pageNumber = Number(page)

const getPlanets = async (searchQuery: string | "", pageNumber: number | 1) => {
    setError(null);
    setLoading(true);
    setData(null);
    setSearchInput('');

    try {
        let res;
        if (searchQuery) {
        res = await getAllByQuery<SearchResponse<Planet>>(searchQuery, 'planets', pageNumber);
        } else {
        res = await getAll<SearchResponse<Planet>>('planets', pageNumber);
        }
        setData(res);
        setSearchResult(res);
    } catch (err: any) {
        setError(err.message);
    }

    setLoading(false);
    };
    const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!searchInput.trim().length) {
			return
		}

	setSearchParams({ query: searchInput, page: '1'})  

	}
    useEffect(() => {
    getPlanets(query || '', pageNumber || 1);
    }, [query, pageNumber]);


    return (

        <>

        <h1>All the Planets</h1> 

			<Form className="mb-4" onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="searchQuery">
							<Form.Label>Search Query</Form.Label>
							<Form.Control
								onChange={e => setSearchInput(e.target.value)}
								placeholder="Enter your search query"
								required
								type="text"
								value={searchInput}
							/>
						</Form.Group>

						<div className="d-flex justify-content-end">
							<Button
								variant="success"
								type="submit"
								disabled={!searchInput.trim().length}
							>Search</Button>
						</div>
                </Form>

        {loading ? (
        <p>🤔 Loading...</p>
        ) : (
        <>
				{data && (
				<div id="search-result">

					{query && <p>Showing search results for "{query}"...</p>}

					<ListGroup className="mb-6">
					{data.data.map((item) => (

					<ListGroup.Item
						action
						as={Link}
						key={item.id}
						variant="success"
						to={`/planets/${item.id}`}
						>
						<h2 className="h3">{item.name}</h2>
						<p className="text-muted small mb-0">terrain: {item.terrain}</p>
						<p className="text-muted small mb-0">Population: {item.population}</p>
						</ListGroup.Item>

					))}

					</ListGroup>
						<div className="page" >Page {pageNumber|| 1 }/ {data.last_page}</div>

						<Pagination
										totalPages={data.total}
										hasPreviousPage={pageNumber > 1}
										hasNextPage={pageNumber  < data.last_page}
										onPreviousPage={() => {setSearchParams({query: query || '', page: String(pageNumber - 1)}) 										}}
										onNextPage={() => {setSearchParams({query: query || '', page: String(pageNumber + 1 ) }) }}
								/> 

					</div>
				)} 
			</> 
        )}

    </> 
	)


}

export default PlanetsPage;
