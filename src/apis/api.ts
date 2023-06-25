import axios, { AxiosResponse } from 'axios';
import { DirectGeocodingInterface, DirectGeocodingParamInterface } from '../interfaces/direct-geocoding-interface';
import { WeatherInterface, WeatherParamsInterface } from '../interfaces/weather-interface';

// optional. set timeout on axios connection
const instance = axios.create({
	timeout: 60000
});

// define API path
const SEARCH_BY_DIRECT_GEOCODING_API = 'http://api.openweathermap.org/geo/1.0/direct';
const SEARCH_WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string, params?: {}) => instance.get(url, {params: params}).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const OpenWeather = {
    getInfoByLocation: (params:DirectGeocodingParamInterface ): Promise<DirectGeocodingInterface[]> => requests.get(SEARCH_BY_DIRECT_GEOCODING_API, params),
	getWeather: (params:WeatherParamsInterface ): Promise<WeatherInterface> => requests.get(SEARCH_WEATHER_API, params),
}
