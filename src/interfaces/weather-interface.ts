interface WeatherSubInterface {
    main: string;
    [x: string]: any;
}

interface WeatherSubMainInterface {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    [x: string]: any;
}

export interface WeatherInterface {
    weather: WeatherSubInterface;
    main: WeatherSubMainInterface;
    dt: number;
    [x: string]: any;
}

export interface WeatherParamsInterface {
    lat: number;
    lon: number;
    appid: number;
}