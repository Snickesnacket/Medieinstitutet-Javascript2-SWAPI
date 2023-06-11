import { useState, useEffect,} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { getAll } from "../services/SWAPI";
import { srchResponse } from "../types";
import Pagination from "../components/Pagination";
import { useSearchParams, Link, useNavigate, } from "react-router-dom";
import SearchPage from "./SearchPage";


export const PeoplePage = () => {
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(true);
const [people, setPeople] = useState<srchResponse|string >('');
//const [page, setPage] = useState(1)
const  [searchresult, setSearchResult] = useState<srchResponse|null>(null) //svaret 
const [searchParams, setSearchParams] = useSearchParams({page:'1'})

 const param = searchParams.get('page')

 const paramnumber = Number(param)

const getPeople = async (paramnumer: number) => {
    setError(null);
    setLoading(true);
	setSearchResult(null)

    try {
    const res = await getAll('people', paramnumber );
    setSearchResult(res);
    console.log(res.data); 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
    setError(err.message);

    }
	setLoading(false)

};

useEffect(() => {

    getPeople( paramnumber);
}, [paramnumber]);

return (
    <>
    <h1>All the people</h1>
        {searchresult && (
        <div id="search-result">
            <ListGroup className="mb-6">
                {searchresult.data.map((data) => (
                <ListGroup.Item action 
                    as={Link}
                    key={data.id}
                    variant="success"
                    to={`/people/${data.id}`}>
                    
                    <h2 className="h3">{data.name}</h2>
                    <p className="text-muted small mb-0">
                    Born: {data.birth_year} 
                    </p>

                    <p className="text-muted small mb-0">
                    height: {data.height} 
                    </p>	
                </ListGroup.Item>
                ))}
            </ListGroup>

            <div className="page" >Page {paramnumber}/ {searchresult.last_page}</div>


            <Pagination
                            
                            totalPages={searchresult.total}
                            hasPreviousPage={searchresult.current_page > 0}
                            hasNextPage={searchresult.current_page + 1 < searchresult.last_page}
                            onPreviousPage={() => {setSearchParams({page: String(paramnumber - 1)}) }}
                            onNextPage={() => {setSearchParams({page: String(paramnumber + 1)}) }}
					/> 
        </div>
    )}
    </>
)

};

export default PeoplePage;

/* export const PeoplePage = () => {
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1)
const  [searchresult, setSearchResult] = useState<srchResponse|null>(null) //svaret 
const [searchParams, setSearchParams] = useSearchParams()// det som skrivs i url.
const [endpoint, setEndpoint] = useState('people')

const getPeople = async (endpoint: string, searchPage: number) => {
    setError(null);
    setLoading(true);
	setSearchResult(null)

    try {
    const res = await getAll('people', searchPage );
    setSearchResult(res);
    console.log(res.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
    setError(err.message);

    }
	setLoading(false)
};

useEffect(() => {
    getPeople( endpoint, page);
}, [page, endpoint ]);

return (
    <>
    <h1>All the people</h1>
    {searchresult && (
        <div id="search-result">
        <ListGroup className="mb-6">
            {searchresult.data.map((data) => (
            <ListGroup.Item
             action href={`/people/${data.id}`} 
             key={data.id}>
                <h2 className="h3">{data.name}</h2>

                <p className="text-muted small mb-0">
                Born: {data.birth_year}  
                </p>

                <p className="text-muted small mb-0">
				height: {data.height} 
                </p>

            </ListGroup.Item>
            ))}
        </ListGroup>

		<Pagination
						page={searchresult.current_page}
						totalPages={searchresult.total}
						hasPreviousPage={searchresult.current_page > 0}
						hasNextPage={searchresult.current_page + 1 < searchresult.total}
						onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
						onNextPage={() => { setPage(prevValue => prevValue + 1) }}
					/> 
        </div>
    )}
    </>
);
*/