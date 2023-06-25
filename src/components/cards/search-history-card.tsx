import History from "./history";
import { WeatherDataInterface } from "../../interfaces/weather-data-interface";

interface SearchHistoryCardProps {
  searchHistories: WeatherDataInterface[] | [];
  onHistoryRemove: (id: string) => void;
  onSearchWeather: (searchedLocation: string) => void;
}

const SearchHistoryCard = ({
  searchHistories,
  onHistoryRemove,
  onSearchWeather,
}: SearchHistoryCardProps) => {
  return (
    <div className="container-search-history-card text">
      <p style={{ margin: "0 0 20px 0" }}>Search History</p>
      {searchHistories.length > 0 ? (
        searchHistories.map(
          (searchHistory: WeatherDataInterface, idx: number) => {
            return (
              <History
                searchHistory={searchHistory}
                onHistoryRemove={onHistoryRemove}
                onSearchWeather={onSearchWeather}
                key={idx}
              />
            );
          }
        )
      ) : (
        <p className="text-center">No search history record</p>
      )}
      <br />
    </div>
  );
};

export default SearchHistoryCard;
