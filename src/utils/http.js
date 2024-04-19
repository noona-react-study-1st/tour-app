import axios from "axios";

const TOUR_API_KEY = import.meta.env.VITE_TOUR_API_KEY;
const VITE_AIRKOREA_API_KEY = import.meta.env.VITE_AIRKOREA_API_KEY;

export const api = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  params: {
    serviceKey: TOUR_API_KEY,
    numOfRows: 10,
    pageNo: 1,
    MobileOS: "ETC",
    MobileApp: "TourApp",
    _type: "json",
  },
});

export const tourApi = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  params: {
    serviceKey: TOUR_API_KEY,
    MobileOS: "ETC",
    MobileApp: "TourApp",
    _type: "json",
  },
});

export const airApi = axios.create({
  baseURL: "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc",
  params: {
    serviceKey: VITE_AIRKOREA_API_KEY,
    returnType: "json",
    numOfRows: 100,
    pageNo: 1,
    ver: "1.0",
  },
});
