

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
    species?: theLink[],
    starships: theLink[],
    vehicles: theLink[],
    homeworld: {
        id: number,
        name: string
    }
}

export type Species = {
    id: number,
    name: string,
    classification: string, 
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_color: string,
    hair_coor: string,
    skin_color: string,
    language: string,
    created: string,
    edited: string, 
    people: theLink[],
    homeworld: {
        id: number,
        name: string
    }
    film: filmLink[]
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
    characters: theLink[],
    planets: theLink[]
    starships: theLink [],
    vehicles: theLink [],
    species: theLink []
}

export type Vehicles = {
    id: number,
    name: string,
    model: string, 
    vehicle_class: string,
    manufacturer: string,
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string, 
    cargo_capacity: string,
    consumables: string,
    created: string,
    edited: string, 
    pilots: theLink[],
    films: filmLink[],
}

export type Planet = {
    id: number,
    name: string,
    rotation_period: string, 
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    created: string,
    edited: string, 
    residents: person [], 
    films: filmLink[],
}

export type Starship = {
    id: number,
    name: string,
    model: string, 
    starship_class: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string, 
    hyperdrive_rating: string,
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    created: string,
    edited: string, 
    pilots: theLink[],
    films: filmLink[],
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

export type srchResponseSpecies = {
    current_page: number, 
    data: Species []
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

export type srchResponseStarships = {
    current_page: number, 
    data: Starships []
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

export type srchResponsePlanets = {
    current_page: number, 
    data: Planets []
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

export type srchResponseVehicles = {
    current_page: number, 
    data: Vehicles []
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

export type theLink = {
    id: number, 
    name: string
}