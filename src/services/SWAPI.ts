import axios from "axios";
import {srchResponse} from '../types/index'

const instance = axios.create({
	baseURL: "https://swapi.thehiveresistance.com/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

const BASE_URL = 'https://swapi.thehiveresistance.com/api'
/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
export const getAll= async <T>(resourceUrl: string, searchPage = 0 ) => {
	const response = await axios.get(resourceUrl)
	return response.data as T
}

export const getAllPlanets= async <T>() => {
	const response = await axios.get(`${BASE_URL}/planets`)
	return response.data as T
}

/**
 * Search 
 * @returns Promise
 */
