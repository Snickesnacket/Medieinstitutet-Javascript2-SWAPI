import Search from '../components/Search'
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

/* export const getAll= async ( endpoint: string, page: number) => {
		return get<srchResponsePerson>(`/${endpoint}/?page=${page}`);

}

export const getQuery= async ( endpoint: string, searchQuery: string, page = 1) => {
		return get<srchResponsePerson>(`/${endpoint}/?search=${searchQuery}&page=${page}`);

}

export const getAllFilms= async ( endpoint: string, page: number) => {
		return get<srchResponseFilm>(`/${endpoint}/?page=${page}`);

}

export const getQueryFilm= async ( endpoint: string, searchQuery: string, page: number) => {
		return get<srchResponseFilm>(`/${endpoint}/?search=${searchQuery}&page=${page}`);
 */

export const getFilmId= async ( endpoint: string, id: number) => {
		return get<Film>(`/${endpoint}/${id}`)

}

export const getItem= async ( endpoint: string, id: number) => {
		return get<theLink>(`/${endpoint}/${id}`)

}
export const getPersonId= async ( endpoint: string, id: number) => {
		return get<Person>(`/${endpoint}/${id}`)

}

export const getPlanetId= async ( endpoint: string, id: number) => {
		return get<Planet>(`/${endpoint}/${id}`)

}
export const getVehicleId= async ( endpoint: string, id: number) => {
		return get<Vehicles>(`/${endpoint}/${id}`)

}
export const getSpecieId= async ( endpoint: string, id: number) => {
		return get<Species>(`/${endpoint}/${id}`)

}

export const getStarshipId= async ( endpoint: string, id: number) => {
		return get<Starship>(`/${endpoint}/${id}`)

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