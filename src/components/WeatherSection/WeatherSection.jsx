import { useFetchWeatherInfoQuery } from "../../hooks/useFetchWeatherInfo";
import { useWeatherStore } from "../../store/weather";
import {
  skyType,
  rainType as precipitationType,
  getWeatherIconClass,
} from "../../constants/weather";
import "./WeatherSection.style.css";
import weatherIcon from "../../assets/weather/weather-icon.png";
import { Spinner } from "react-bootstrap";
import MainAirStatus from "../MainAirStatus/MainAirStatus";

export default function WeatherSection() {
  const { weatherArea } = useWeatherStore();
  const { baseDate, baseTime, nX, nY } = weatherArea;

  const { data, isLoading, isError, error } = useFetchWeatherInfoQuery({
    baseDate,
    baseTime,
    nX,
    nY,
  });

  const currDate = new Date();
  const currHHMM = currDate.getHours() * 100 + currDate.getMinutes();

  let content;

  function findStartIndex(arr) {
    if (currHHMM >= 2310) {
      return 0;
    } else if (currHHMM >= 0 && currHHMM < 100) {
      return 1;
    } else if (currHHMM >= 100 && currHHMM < 210) {
      return 2;
    } else {
      return arr.findIndex((row) => +row.fcstTime - currHHMM >= 0);
    }
  }
  if (isLoading) {
    content = (
      <section className="forecast-skeleton">
        <Spinner />
      </section>
    );
  }

  if (isError) {
    content = (
      <section className="forecast-skeleton">
        <span>{error.message}</span>
      </section>
    );
  }

  if (data) {
    const itemsArray = data.response.body.items.item;

    const tmpData = itemsArray.filter((row) => row.category === "TMP");
    const skyData = itemsArray.filter((row) => row.category === "SKY");
    const windData = itemsArray.filter((row) => row.category === "WSD");
    const humidityData = itemsArray.filter((row) => row.category === "REH");
    const rainProb = itemsArray.filter((row) => row.category === "POP");
    const rainType = itemsArray.filter((row) => row.category === "PTY");
    const maxTemp = itemsArray.filter((row) => row.category === "TMX");
    const minTemp = itemsArray.filter((row) => row.category === "TMN");

    const startIndex = findStartIndex(tmpData);

    let weatherState = "";

    if (rainType[startIndex].fcstValue === "0") {
      weatherState = skyType[skyData[startIndex].fcstValue];
    } else {
      weatherState = precipitationType[rainType[startIndex].fcstValue];
    }
    // console.log(itemsArray);

    content = (
      <>
        <section className="forecast-section">
          <div className="weather-temp-box">
            <div className="temp-box">
              <div className="curr-temp">{tmpData[startIndex].fcstValue}°C</div>
              <div>
                {Math.round(maxTemp[0].fcstValue)}°C /{" "}
                {Math.round(minTemp[0].fcstValue)}°C
              </div>
            </div>
            <div className="weather-state-section">
              <div
                className={`weather-icon ${getWeatherIconClass(weatherState)}`}
                style={{
                  backgroundImage: `url("${weatherIcon}")`,
                }}
              />
              <div>{weatherState}</div>
            </div>
          </div>
          <div className="etc-box">
            <div>풍속 {windData[startIndex].fcstValue} m/s</div>
            <div>습도 {humidityData[startIndex].fcstValue}%</div>
          </div>
          <div className="weather-slider overflow-auto">
            <ul>
              <li style={{ width: "5rem", fontWeight: "700" }}>시간</li>
              {tmpData.slice(startIndex, startIndex + 24).map((row, index) => (
                <li key={index}>{row.fcstTime.substring(0, 2)}시</li>
              ))}
            </ul>
            <ul>
              <li style={{ width: "5rem", fontWeight: "700" }}>기온</li>
              {tmpData.slice(startIndex, startIndex + 24).map((row, index) => (
                <li key={index}>{row.fcstValue}°C</li>
              ))}
            </ul>
            <ul>
              <li style={{ width: "5rem", fontWeight: "700" }}>강수확률</li>
              {rainProb.slice(startIndex, startIndex + 24).map((row, index) => (
                <li key={index}>{row.fcstValue}%</li>
              ))}
            </ul>
          </div>
        </section>
        {/* 미세먼지 추가 by byoul */}
        <div>
          <MainAirStatus cityName={weatherArea.cityName} />
        </div>
      </>
    );
  }
  return (
    <div className="weather-section">
      {content}
      <section></section>
    </div>
  );
}
