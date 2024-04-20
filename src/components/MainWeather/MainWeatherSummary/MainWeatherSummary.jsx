import { useFetchWeatherInfoQuery } from "../../../hooks/useFetchWeatherInfo";
import { useWeatherStore } from "../../../store/weather";
import { cities } from "../../../constants/area";
import {
  skyType,
  rainType as precipitationType,
  getWeatherIconClass,
} from "../../../constants/weather";
import "./MainWeatherSummary.style.css";
import { Container, Row, Col } from "react-bootstrap";
import weatherIcon from "../../../assets/weather/Weather-Icons.jpg";
import AirItem from "../../MainAirStatus/AirItem";

export default function WeatherSection() {
  const { weatherArea, setCity } = useWeatherStore();
  const { baseDate, baseTime, nX, nY } = weatherArea;
  console.log("weatherArea", weatherArea);
  const { data } = useFetchWeatherInfoQuery({
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

  if (data) {
    const itemsArray = data.response.body.items.item;

    const tmpData = itemsArray.filter((row) => row.category === "TMP");
    const skyData = itemsArray.filter((row) => row.category === "SKY");
    const windData = itemsArray.filter((row) => row.category === "WSD");
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

    content = (
      <Container>
        <Row className="align-items-center">
          <Col className="weather-icon-area" lg={6} xs={6}>
            {" "}
            <div
              className={`weather-icon ${getWeatherIconClass(weatherState)}`}
              style={{
                backgroundImage: `url("${weatherIcon}")`,
              }}
            />
          </Col>
          <Col lg={6} xs={6}>
            <div className="temp-title">
              {weatherState} {tmpData[startIndex].fcstValue}°C
            </div>
            <div>
              {Math.round(maxTemp[0].fcstValue)}°C /{" "}
              {Math.round(minTemp[0].fcstValue)}°C
            </div>
            <div>풍속{windData[startIndex].fcstValue} m/s</div>
            <div>습도{rainProb[startIndex].fcstValue}%</div>
            <div>
              {weatherArea && <AirItem cityName={weatherArea.cityName} />}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="weather-summary-box">
      <Row className="align-items-center">
        <Col lg={4} xs={12}>
          <div>
            {cities.map((city, index) => {
              return (
                <button
                  className="city-btn"
                  key={index}
                  onClick={() => setCity(city.name)}
                >
                  {city.name}
                </button>
              );
            })}
          </div>
        </Col>
        <Col lg={8} xs={12}>
          <div className="weather-info">{content}</div>
        </Col>
      </Row>
    </div>
  );
}
