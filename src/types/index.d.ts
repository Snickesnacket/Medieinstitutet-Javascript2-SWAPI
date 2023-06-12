

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
