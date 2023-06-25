export interface WeatherDataInterface {
  id: string; // for tracing
  temp: number;
  minTemp: number;
  maxTemp: number;
  location: string;
  datetime: string;
  humidity: number;
  weather: string;
}
