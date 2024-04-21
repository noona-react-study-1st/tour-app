import { useEffect, useState } from "react";
import { useFetchAirDataQuery } from "../../hooks/useFetchAirData";
import { cities } from "../../constants/area";
import { useFetchWeatherDataQuery } from "../../hooks/useFetchWeatherData";
import AirItem from "../../components/MainAirStatus/AirItem";

const WeatherBanner = ({ areaCode, lon, lat }) => {
  let [isArea, setIsArea] = useState(false);
  const [areaTxt, setAreaTxt] = useState();
  cities.forEach((city) => {
    if (city.areaCode === Number(areaCode) && !isArea) {
      setAreaTxt(city.name);
      setIsArea(true);
    }
    // console.log(city.areaCode, areaCode, city.name);
  });

  const [airData, setAirData] = useState();
  const { data, isLoading, isError } = useFetchAirDataQuery(areaTxt);
  // console.log(data, isLoading, isError);
  const { data: weatherData } = useFetchWeatherDataQuery(lat, lon);
  // console.log("weatherData-", weatherData);

  useEffect(() => {
    if (!isLoading && !isError) {
      setAirData(data?.response?.body?.items[0]);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    <p>...</p>;
  }
  return (
    <div className="weatherBanner no-print">
      <div className="weatherInfo">
        {/* <span
          className={`weatherIcon weatherIcon${weatherData?.weather[0]?.id
            ?.toString()
            ?.charAt(0)} ${
            weatherData?.weather[0]?.main === "Clear" && "clear"
          }`}
        ></span> */}
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
          alt=""
        />
        <br />
        {weatherData?.main.temp}℃
      </div>
      {airData && <AirItem data={airData} />}
    </div>
  );
};

export default WeatherBanner;
