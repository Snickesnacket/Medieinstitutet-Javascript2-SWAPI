import axios from "axios";
import {srchResponse} from '../types/index'

const instance = axios.create({
	baseURL: "https://swapi.thehiveresistance.com/api.",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
const get = async <T>(endpoint: string) => {
	const response = await instance.get(endpoint)
	return response.data as T
}

/**
 * Search 
 * @returns Promise
 */
export const search = async (query: string, page = 0) => {
	return get<srchResponse>(`/search?query=${query}&tags=story&page=${page}`)
}