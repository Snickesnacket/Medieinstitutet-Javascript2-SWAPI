import axios, { AxiosInstance } from 'axios';
import { Film, Person, Planet, Species, Starship } from '../types/index';

const api: AxiosInstance = axios.create({
	baseURL: 'https://swapi.thehiveresistance.com/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

const resourceUrls = {
	films: '/films',
	people: '/people',
	species: '/species',
	starships: '/starships',
	vehicles: '/vehicles',
	planets: '/planets',
};

type ResourceType = keyof typeof resourceUrls;

const get = async <T>(url: string): Promise<T> => {
  const response = await api.get<T>(url);
  return response.data;
};

const getResourceUrl = (resourceType: ResourceType): string => {
	return resourceUrls[resourceType];
};

export const getAllByQuery = async <T>(searchQuery: string, resourceType: ResourceType, page = 1): Promise<T> => {
	const url = `${getResourceUrl(resourceType)}/?search=${searchQuery}&page=${page}`;
return get<T>(url);
};

export const getAll = async <T>(resourceType: ResourceType, page = 1): Promise<T> => {
	const url = `${getResourceUrl(resourceType)}/?page=${page}`;
return get<T>(url);
};

export const getById = async <T>(resourceType: ResourceType, id: number): Promise<T> => {
	const url = `${getResourceUrl(resourceType)}/${id}`;
return get<T>(url);
};