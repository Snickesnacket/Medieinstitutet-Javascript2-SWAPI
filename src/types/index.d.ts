

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
    films: filmLink[], 
    species?: speciesLink[],
    starships: starshipLink[],
    vehicles: vehicleLink[],
    homeworld: {
        id: number,
        name: string
    }
}

export type Film = {
    id: number,
    title: string,
    episode_id: string, 
    opening_crawl: string,
    director: string,
    height: string,
    producer: string,
    release_date: string,
    created: string,
    edited: string, 
    characters: charactersLink[],
    planets: planetsLink[]
    starships: starshipLink [],
    vehicles: vehicleLink [],
    species: speciesLink []
}


export type srchResponsePerson = {
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
export type srchResponseFilm = {
     current_page: number, 
    data: Film []
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

export type filmLink = {
    id: number, 
    title: string
}

export type speciesLink = {
    id: number, 
    title: string
}

export type starshipsLInk = {
    id: number, 
    name: string
}
export type vehiclesLink = {
    id: number, 
    title: string
}

export type charactersLink = {
  id: number;
  name: string;
};

