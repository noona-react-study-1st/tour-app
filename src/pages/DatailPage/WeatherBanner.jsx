import { useEffect, useState } from "react";
import { useFetchAirDataQuery } from "../../hooks/useFetchAirData";
import { cities } from "../../constants/area";
import { useFetchWeatherDataQuery } from "../../hooks/useFetchWeatherData";

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
  const { data: weatherData } = useFetchWeatherDataQuery(lat, lon);
  console.log("weatherData-", weatherData);
  const [pm10, setPm10] = useState();
  const [pm25, setPm25] = useState();
  const [o3, setO3] = useState();

  useEffect(() => {
    if (!isLoading && !isError) {
      setAirData(data?.response.body.items[0]);
      setO3((airData?.o3Value * 100).toFixed(2));
      setPm10(airData?.pm10Value);
      setPm25(airData?.pm25Value);
    }
  }, [data, isLoading, isError]);

  console.log("airData", airData, areaTxt);
  return (
    <div className="weatherBanner no-print">
      <div className="weatherInfo">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
          alt=""
        />
        <br />
        {weatherData?.main.temp}℃
      </div>
      <div className="airStatus">
        <ul>
          <li>
            미세
            {pm10 < 31 ? (
              <span className="good">좋음</span>
            ) : pm10 < 81 ? (
              <span className="normal">보통</span>
            ) : pm10 < 151 ? (
              <span className="bad">나쁨</span>
            ) : (
              <span className="tooBad">나쁨</span>
            )}
          </li>
          <li>
            초미세
            {pm25 < 16 ? (
              <span className="good">좋음</span>
            ) : pm25 < 36 ? (
              <span className="normal">보통</span>
            ) : pm25 < 76 ? (
              <span className="bad">나쁨</span>
            ) : (
              <span className="tooBad">나쁨</span>
            )}
          </li>
          <li>
            오존
            {o3 < 3 ? (
              <span className="good">좋음</span>
            ) : o3 < 9 ? (
              <span className="normal">보통</span>
            ) : o3 < 15 ? (
              <span className="bad">나쁨</span>
            ) : (
              <span className="tooBad">나쁨</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherBanner;
