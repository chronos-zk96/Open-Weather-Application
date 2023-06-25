import { SearchIcon } from "../icons/search-icon";
import { RemoveIcon } from "../icons/remove-icon";
import { WeatherDataInterface } from "../../interfaces/weather-data-interface";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import { MOBILE_VIEW_MAX_WIDTH } from "../../constant";

interface HistoryProps {
  searchHistory: WeatherDataInterface;
  onHistoryRemove: (id: string) => void;
  onSearchWeather: (searchedLocation: string) => void;
}

const History = ({
  searchHistory,
  onHistoryRemove,
  onSearchWeather,
}: HistoryProps) => {
  const [windowInnerWidth] = useWindowDimensions();
  return (
    <>
      <div className="container-history flex-row">
        {windowInnerWidth >= MOBILE_VIEW_MAX_WIDTH ? (
          // desktop view
          <>
            <div>{searchHistory.location}</div>
            <div className="text-history-info ms-auto">
              {searchHistory.datetime}
            </div>
          </>
        ) : (
          // mobile view
          <div className="flex-column">
            <div>{searchHistory.location}</div>
            <div className="text-sm">{searchHistory.datetime}</div>
          </div>
        )}

        <div
          className={windowInnerWidth >= MOBILE_VIEW_MAX_WIDTH ? "" : "ms-auto"}
        >
          <button
            className="button-circle text-history-info"
            onClick={() => onSearchWeather(searchHistory.location)}
          >
            <SearchIcon />
          </button>
          <button
            className="button-circle text-history-info"
            onClick={() => onHistoryRemove(searchHistory.id)}
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default History;
