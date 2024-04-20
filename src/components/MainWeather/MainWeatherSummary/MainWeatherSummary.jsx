import { useFetchWeatherInfoQuery } from '../../../hooks/useFetchWeatherInfo';
import { useWeatherStore } from '../../../store/weather';
import { useAreaStore } from '../../../store/area';
import { cities } from '../../../constants/area';
import {
  skyType,
  rainType as precipitationType,
} from '../../../constants/weather';
import './MainWeatherSummary.style.css';

export default function WeatherSection() {
  const { weatherArea } = useWeatherStore();
  const { baseDate, baseTime, nX, nY } = weatherArea;

  const { data } = useFetchWeatherInfoQuery({ baseDate, baseTime, nX, nY });

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

    const tmpData = itemsArray.filter((row) => row.category === 'TMP');
    const skyData = itemsArray.filter((row) => row.category === 'SKY');
    const windData = itemsArray.filter((row) => row.category === 'WSD');
    const rainProb = itemsArray.filter((row) => row.category === 'POP');
    const rainType = itemsArray.filter((row) => row.category === 'PTY');
    const maxTemp = itemsArray.filter((row) => row.category === 'TMX');
    const minTemp = itemsArray.filter((row) => row.category === 'TMN');

    const startIndex = findStartIndex(tmpData);

    let weatherState = '';

    if (rainType[startIndex].fcstValue === '0') {
      weatherState = skyType[skyData[startIndex].fcstValue];
    } else {
      weatherState = precipitationType[rainType[startIndex].fcstValue];
    }

    content = (
      <>
        <div>기온 {tmpData[startIndex].fcstValue}°C</div>
        <div>
          {Math.round(maxTemp[0].fcstValue)}°C /{' '}
          {Math.round(minTemp[0].fcstValue)}°C
        </div>
        <div>{weatherState}</div>
        <div>{windData[startIndex].fcstValue} m/s</div>
        <div>{rainProb[startIndex].fcstValue}%</div>
      </>
    );
  }

  const { setAreaCode } = useAreaStore();
  const { setCity } = useWeatherStore();

  return (
    <div className='weather-summary-box'>
      <div>
      {cities.map((city, index) => {
        return (
          <div
            href='https://api.visitkorea.or.kr/#/'
            target='_blank'
            key={index}
          >
            {city.name}
          </div>
        );
      })}
      </div>
      <div className='weather-info'>{content}</div>
    </div>
  );
}
