import WeatherInfographic from "../infographics/weather-infographic";
import SearchHistoryCard from "./search-history-card";
import { WeatherDataInterface } from "../../interfaces/weather-data-interface";
import SunCloudImage from "../../assets/sun.png";
import "../../styles/images.scss";

interface WeatherCardProps {
  searchHistories: WeatherDataInterface[] | [];
  onHistoryRemove: (id: string) => void;
  onSearchWeather: (searchedLocation: string) => void;
}

const WeatherCard = ({
  searchHistories,
  onHistoryRemove,
  onSearchWeather,
}: WeatherCardProps) => {
  // get the most recent searched history record
  const current = searchHistories.length > 0 ? searchHistories[0] : {};
  
  return (
    <div className="container-window-card" style={{ position: "relative" }}>
      <img src={SunCloudImage} alt="sun with clouds" className="image-sun" />
      {searchHistories.length > 0 ? (
        <WeatherInfographic current={current} />
      ) : (
        // create empty container just for better visual experience
        <div style={{ marginTop: "100px" }}></div>
      )}
      <SearchHistoryCard
        searchHistories={searchHistories}
        onHistoryRemove={onHistoryRemove}
        onSearchWeather={onSearchWeather}
      />
    </div>
  );
};

export default WeatherCard;
