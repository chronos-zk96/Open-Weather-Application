import { WeatherDataInterface } from "../../interfaces/weather-data-interface";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import { MOBILE_VIEW_MAX_WIDTH } from "../../constant";

type WeatherInfographicProps = {
  current: WeatherDataInterface | any;
};

const WeatherInfographic = ({ current }: WeatherInfographicProps) => {
  const [windowInnerWidth] = useWindowDimensions();

  return (
    <div className="container-weather-infographic text">
      {windowInnerWidth >= MOBILE_VIEW_MAX_WIDTH ? (
        // desktop view
        <>
          <div>Today's Weather</div>
          <div className="text-current-temparature">
            {current.temp}
            <sup>o</sup>
          </div>
          <div>
            H: {current.maxTemp}
            <sup>o</sup> L: {current.minTemp}
            <sup>o</sup>
          </div>
          <div className="flex-row-space-between text-weather-info">
            <div>
              <b>{current.location}</b>
            </div>
            <div>{current.datetime}</div>
            <div>Humidity: {current.humidity}%</div>
            <div>{current.weather}</div>
          </div>
        </>
      ) : (
        // mobile view
        <div className="flex-row-space-between">
          <div>
            <div>Today's Weather</div>
            <div className=" text-current-temparature">
              {current.temp}
              <sup>o</sup>
            </div>
            <div>
              H: {current.maxTemp}
              <sup>o</sup> L: {current.minTemp}
              <sup>o</sup>
            </div>
            <div className="text-weather-info">
              <b>{current.location}</b>
            </div>
          </div>
          <div
            className="text-weather-info"
            style={{ alignSelf: "flex-end", textAlign: "end" }}
          >
            <div>{current.weather}</div>
            <div>Humidity: {current.humidity}%</div>
            <div>{current.datetime}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfographic;
