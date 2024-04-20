import axios from 'axios';

const TOUR_API_KEY = import.meta.env.VITE_TOUR_API_KEY;
const VITE_OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const api = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011/KorService1',
  params: {
    serviceKey: TOUR_API_KEY,
    numOfRows: 10,
    pageNo: 1,
    MobileOS: 'ETC',
    MobileApp: 'TourApp',
    _type: 'json',
  },
});

export const tourApi = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011/KorService1',
  params: {
    serviceKey: TOUR_API_KEY,
    MobileOS: 'ETC',
    MobileApp: 'TourApp',
    _type: 'json',
  },
});

export const airApi = axios.create({
  baseURL: 'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc',
  params: {
    serviceKey: TOUR_API_KEY,
    returnType: 'json',
    numOfRows: 100,
    pageNo: 1,
    ver: '1.0',
  },
});

export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: VITE_OPENWEATHER_API_KEY,
    units: 'metric',
  },
});

export const weatherApi = axios.create({
  baseURL: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0',
  params: {
    serviceKey: TOUR_API_KEY,
    dataType: 'JSON',
    numOfRows: 360,
  },
});
