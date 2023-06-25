interface LocalNamesInterface {
    [key: string]: string;
}

export interface DirectGeocodingInterface {
    name: string;
    local_names: LocalNamesInterface;
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export interface DirectGeocodingParamInterface {
    q: string;
    limit: number;
    appid: string;
}