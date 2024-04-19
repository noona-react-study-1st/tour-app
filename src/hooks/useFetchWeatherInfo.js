import { weatherApi } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchWeatherInfo({ baseDate, baseTime, nX, nY }) {
  const params = {
    base_date: baseDate,
    base_time: baseTime,
    nx: nX,
    ny: nY,
  };
  return weatherApi.get('/getVilageFcst', { params });
}

export function useFetchWeatherInfoQuery({ baseDate, baseTime, nX, nY }) {
  return useQuery({
    queryKey: ['weather', { baseDate, baseTime, nX, nY }],
    queryFn: () => fetchWeatherInfo({ baseDate, baseTime, nX, nY }),
    select: (results) => results.data,
    staleTime: 10 * 60 * 1000,
  });
}
