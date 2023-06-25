import React, { useState } from "react";
import { DateTime } from "luxon";
import { v4 as uuid } from "uuid";

import Alert from "../components/alerts/alert";
import SearchBar from "../components/bars/search-bar";
import WeatherCard from "../components/cards/weather-card";
import { OpenWeather } from "../apis/api";
import { WeatherDataInterface } from "../interfaces/weather-data-interface";

type filterTextType = string;

const WeatherPage = () => {
  const [filterText, setFilterText] = useState<filterTextType>("");
  const [searchHistories, setSearchHistories] = useState<
    WeatherDataInterface[] | []
  >([]);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const convertKelvinToCelcius = (temp: number): number => {
    // convert kelvin temperature to celcius temperature
    return Math.floor(temp - 273.15);
  };

  const onFilterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Stop searching for empty value
    if (filterText.trim() === "") return;

    try {
      setAlertMessage(""); // reset error message
      await onSearchWeather(filterText);
      setFilterText(""); // reset filter text
    } catch (err) {
      console.error(err);
    }
  };

  const onHistoryRemove = (id: string) => {
    // remove the record through id
    const newSearchHistories = searchHistories.filter(
      (history) => history.id !== id
    );
    setSearchHistories(newSearchHistories);
  };

  const onSearchWeather = async (searchedLocation: string) => {
    // get the information such as latitude and longitude by using location
    // call the geocoder API
    const infoRes = await OpenWeather.getInfoByLocation({
      q: searchedLocation,
      limit: 1, // set to 1 as just focus on first result
      appid: import.meta.env.VITE_API_KEY,
    });
    if (infoRes.length === 0) {
      return setAlertMessage(`No result found for ${searchedLocation}.`);
    }

    // get the weather
    const weatherRes = await OpenWeather.getWeather({
      lat: infoRes[0].lat,
      lon: infoRes[0].lon,
      appid: import.meta.env.VITE_API_KEY,
    });

    // if invalid lat and lon is used, cod 400 is returned with error message
    if (weatherRes.cod === 400) {
      return setAlertMessage(weatherRes.message);
    }

    /**
     * the datetime here is referring to the time when the API is called
     * instead of taking the API datetime value.
     *
     * the lat and lon here is used based on the initial location searched value.
     * lat and lon from coord in weather API will result different in search.
     */
    setSearchHistories([
      {
        id: uuid(), // if retrieve from db, then just use the id
        temp: convertKelvinToCelcius(weatherRes.main.temp),
        minTemp: convertKelvinToCelcius(weatherRes.main.temp_min),
        maxTemp: convertKelvinToCelcius(weatherRes.main.temp_max),
        location: `${infoRes[0].name}, ${infoRes[0].country}`,
        datetime: DateTime.now().toFormat("dd-LL-yyyy hh.mm a"),
        humidity: weatherRes.main.humidity,
        weather: weatherRes.weather[0].main,
      },
      ...searchHistories,
    ]);
  };

  return (
    <div className="container">
      <SearchBar
        filterText={filterText}
        submitFilter={onFilterSubmit}
        setFilterText={setFilterText}
      />
      {alertMessage && <Alert message={alertMessage} />}
      <WeatherCard
        searchHistories={searchHistories}
        onHistoryRemove={onHistoryRemove}
        onSearchWeather={onSearchWeather}
      />
    </div>
  );
};

export default WeatherPage;
