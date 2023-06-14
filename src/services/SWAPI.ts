
import {Film, Person, Planet, Species, Starship, Vehicles, filmLink, srchResponseFilm, srchResponsePerson, srchResponsePlanets, srchResponseSpecies, srchResponseStarships, srchResponseVehicles, theLink} from '../types/index'
import axios from 'axios'

const instance = axios.create({
	baseURL: "https://swapi.thehiveresistance.com/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})
const get = async <T>(endpoint: string) => {
	const response = await instance.get(endpoint)
	return response.data as T
}

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

export const getAll= async ( endpoint: string, page: number) => {
		return get<srchResponsePerson>(`/${endpoint}/?page=${page}`);

}


export const getAllFilms= async ( endpoint: string, page: number) => {
		return get<srchResponseFilm>(`/${endpoint}/?page=${page}`);

}


export const getQuery= async ( searchQuery: string, page = 1) => {
		return get<srchResponsePerson>(`/people/?search=${searchQuery}&page=${page}`);

}

export const getQueryPlanets= async ( searchQuery: string, page = 1) => {
		return get<srchResponsePlanets>(`/planets/?search=${searchQuery}&page=${page}`);

}

export const getQuerySpecies= async ( searchQuery: string, page = 1) => {
		return get<srchResponseSpecies>(`/species/?search=${searchQuery}&page=${page}`);

}

export const getQueryVehicles= async ( searchQuery: string, page = 1) => {
		return get<srchResponseVehicles>(`/vehicles/?search=${searchQuery}&page=${page}`);

}

export const getQueryStarships= async ( searchQuery: string, page = 1) => {
		return get<srchResponseStarships>(`/starships/?search=${searchQuery}&page=${page}`);

}

export const getQueryFilms = async (searchQuery: string, page = 1) => {
  return get<srchResponseFilm>(`/films/?search=${searchQuery}&page=${page}`);
}; 

export const getFilmId= async ( id: number) => {
		return get<Film>(`/films/${id}`)

}

export const getItem= async ( endpoint: string, id: number) => {
		return get<theLink>(`/${endpoint}/${id}`)

}
export const getPersonId= async ( id: number) => {
		return get<Person>(`/people/${id}`)

}

export const getPlanetId= async ( id: number) => {
		return get<Planet>(`/planets/${id}`)

}
export const getVehicleId= async ( id: number) => {
		return get<Vehicles>(`/vehicles/${id}`)

}
export const getSpecieId= async ( id: number) => {
		return get<Species>(`/species/${id}`)

}

export const getStarshipId= async ( id: number) => {
		return get<Starship>(`/starships/${id}`)

}


export const getAllt= async <T>(endpoint: string) => {
		return get(endpoint) as T
}

export const getAllMovies= async (searchQuery: string, page: number) => {

	return getAllt<srchResponseFilm>(`/films/?query=${searchQuery}&page=${page}`);

}

export const getAllPeople= async (searchQuery: string, page: number) => {

	return getAllt<srchResponsePerson>(`/people/?query=${searchQuery}&page=${page}`);

}

export const getAllSpecies= async (searchQuery: string, page: number) => {

	return getAllt<srchResponseSpecies>(`/species/?query=${searchQuery}&page=${page}`);

}

export const getAllStarships= async (searchQuery: string, page: number) => {

	return getAllt<srchResponseStarships>(`/starships/?query=${searchQuery}&page=${page}`);

}

export const getAllVehicles= async (searchQuery: string, page: number) => {

	return getAllt<srchResponseVehicles>(`/vehicles/?query=${searchQuery}&page=${page}`);

}

export const getAllPlanets= async (searchQuery: string, page: number) => {

	return getAllt<srchResponsePlanets>(`/planets/?query=${searchQuery}&page=${page}`);

}