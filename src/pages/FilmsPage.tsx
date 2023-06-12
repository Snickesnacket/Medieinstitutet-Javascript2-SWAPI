import { useState, useEffect,} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { getAllFilms, getQueryFilm} from "../services/SWAPI";
import { srchResponseFilm } from "../types";
import Pagination from "../components/Pagination";
import { useSearchParams, Link, } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

export const FilmsPage = () => {
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(true)
const  [data, setData] = useState<srchResponseFilm|null>(null) //svaret 
const [searchParams, setSearchParams] = useSearchParams({page:'1'})
const [queryParams, setQueryParams] = useSearchParams('')
const [searchResult, setSearchResult] = useState<srchResponseFilm|null>(null)
const param = searchParams.get('page')
const query = queryParams.get('query')
const [searchInput, setSearchInput] = useState('')

const paramnumber = Number(param)

const getFilm = async (searchQuery: string, paramnumber: number) => {
    setError(null);
    setLoading(true);
    setData(null);

    try {
        let res;
        if (searchQuery) {
        res = await getQueryFilm('films', searchQuery, paramnumber);
        } else {
        res = await getAllFilms('films', paramnumber);
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

		// haxx0r
		if (!searchInput.trim().length) {
			return
		}

		setQueryParams({ query: searchInput })  

	}
    useEffect(() => {
    getFilm(query || '', paramnumber);
    }, [query, paramnumber, searchInput]);


    return (

        <>

        <h1>All the Films</h1> 

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
                {data.data.map((data) => (

                    <ListGroup.Item
                    action
                    as={Link}
                    key={data.id}
                    variant="success"
                    to={`/films/${data.id}`}
                    >
                    <h2 className="h3">{data.title}</h2>
                    <p className="text-muted small mb-0">director: {data.director}</p>
                    <p className="text-muted small mb-0">created: {data.release_date}</p>
                    </ListGroup.Item>

                ))}

                </ListGroup>
                    <div className="page" >Page {paramnumber}/ {data.last_page}</div>

                    <Pagination
                                    totalPages={data.total}
                                    hasPreviousPage={data.current_page > 0}
                                    hasNextPage={data.current_page + 1 < data.last_page}
                                    onPreviousPage={() => {setSearchParams({page: String(paramnumber - 1)}) }}
                                    onNextPage={() => {setSearchParams({page: String(paramnumber + 1)}) }}
                            /> 

                </div>
            )}
            </>
        )}

        </>

    )
};

export default FilmsPage;


