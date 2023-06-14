    export interface BaseEntity {
    id: number;
    created: string;
    edited: string;
    }

    export interface FilmLink {
    id: number;
    title: string;
    }

    export interface TheLink {
    id: number;
    name: string;
    }

    export interface Link {
    url: string | null;
    label: string;
    active: boolean;
    }

    export interface Vehicle extends BaseEntity {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    pilots: TheLink[];
    films: FilmLink[];
    }

    export interface Person extends BaseEntity {
    name: string;
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    films: FilmLink[];
    species?: TheLink[];
    starships: TheLink[];
    vehicles: TheLink[];
    homeworld: TheLink;
    }

    export interface Species extends BaseEntity {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_color: string;
    hair_color: string;
    skin_color: string;
    language: string;
    people: TheLink[];
    homeworld: TheLink;
    films: FilmLink[];
    }

    export interface Film extends BaseEntity {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: TheLink[];
    planets: TheLink[];
    starships: TheLink[];
    vehicles: TheLink[];
    species: TheLink[];
    }

    export interface Planet extends BaseEntity {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Person[];
    films: FilmLink[];
    }

    export interface Starship extends BaseEntity {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    pilots: TheLink[];
    films: FilmLink[];
    }

    export interface SearchResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
    }
