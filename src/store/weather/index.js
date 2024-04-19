import { create } from 'zustand';
import {
  getBaseTimeAndDate,
  getXYCoordsBySigunguName,
  getXYCoordsByCityName,
} from '../../constants/weather';

const { baseDate, baseTime } = getBaseTimeAndDate();

const initialState = {
  cityName: '서울특별시',
  sigunguName: '',
  nX: 60,
  nY: 127,
  baseDate,
  baseTime,
};

export const useWeatherStore = create((set) => ({
  weatherArea: initialState,
  setCity: (cityName) => {
    const { nX, nY } = getXYCoordsByCityName(cityName);
    set(
      (state) =>
        (state.weatherArea = {
          ...state.weatherArea,
          cityName,
          nX,
          nY,
          sigunguName: '',
        })
    );
  },
  setSigungu: (sigunguName) => {
    const { nX, nY } = getXYCoordsBySigunguName(sigunguName);
    set(
      (state) =>
        (state.weatherArea = { ...state.weatherArea, sigunguName, nX, nY })
    );
  },
}));
