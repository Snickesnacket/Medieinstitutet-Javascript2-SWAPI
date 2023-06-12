import {Person, srchResponse} from '../types/index'
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
/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
export const getAll= async ( endpoint: string, page: number) => {
		return get<srchResponse>(`/${endpoint}/?page=${page}`);

}

export const getQuery= async ( endpoint: string, searchQuery: string, page: number) => {
		return get<srchResponse>(`/${endpoint}/?search=${searchQuery}&page=${page}`);

}

export const getId= async ( endpoint: string, id: number) => {
		return get<Person>(`/${endpoint}/${id}`)

}

export const getAllPlanets= async <T>() => {
	const response = await axios.get(`${BASE_URL}/planets`) 
	return response.data as T
}

/**
 * Search 
 * @returns Promise
 */

/* export const search = async (query: string, page = 0) => {
	return get<srchRespone>(`/search?query=${query}&tags=story&page=${page}`)
} */