import axios from 'axios';

const TOUR_API_KEY = import.meta.env.VITE_TOUR_API_KEY;

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
