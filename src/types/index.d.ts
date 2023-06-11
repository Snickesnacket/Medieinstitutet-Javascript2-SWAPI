

export type Person = {
    id: number,
    name: string,
    birth_year: string, 
    eye_color: string,
    hair_coor: string,
    height: string,
    mass: string,
    skin_color: string,
    created: string,
    films: film[], 
    species?: species[],
    starships: starship[],
    vehicles: vehicle[],
    homeworld: {
        id: number,
        name: string
    }
}

export type srchResponse = {
    current_page: number, 
    data: Person []
    first_page_url: string,
    from: number, 
    last_page: number, 
    last_page_url: string
    links: link []
    next_page_url: string, 
    path: string,
    per_page: number, 
    prev_page_ur:null, 
    to: number, 
    total: number,
}

export type link = {
    url: null| string,
    label: string, 
    active: boolean,
}

export type film = {
    id: number, 
    title: string
}

export type species = {
    id: number, 
    title: string
}

export type starships = {
    id: number, 
    name: string
}
export type vehicles = {
    id: number, 
    title: string
}
/* 
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
                            
                                    {person.films.map((film  => (
                                        <ListGroupItem
                                            action
                                            key={film.id}
                                    ><p>{film.title}</p>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            <div/>
                            
                            <div> 
                                <ListGroup className='mb-3'>
                            
                                    {person.species?.map((species  => (
                                        <ListGroupItem
                                            action
                                            key={species.id}
                                    ><p>{species.title}</p>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            <div/>

                            <div> 
                                <ListGroup className='mb-3'>
                            
                                    {person.starships.map((starship  => (
                                        <ListGroupItem
                                            action
                                            key={starship.}
                                    ><p>{starship.name}</p>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            <div/>
                            <div> 
                                <ListGroup className='mb-3'>
                            
                                    {person.vehicles.map((vehicles  => (
                                        <ListGroupItem
                                            action
                                            key={vehicles.id}
                                    ><p>{vehicles.title}</p>
                                    </ListGroupItem>
                                    )))}
                                </ListGroup>
                            </div>
                        </div>
                </div>
            )}
        </>
    )           */