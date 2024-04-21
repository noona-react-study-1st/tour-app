import { useQuery } from "@tanstack/react-query";
import { openWeatherApi } from "../utils/http";

function fetchWeatherData(lat, lon) {
  return openWeatherApi.get(`/weather?lat=${lat}&lon=${lon}`);
}

export function useFetchWeatherDataQuery(lat, lon) {
  // console.log("area", lat, lon);
  return useQuery({
    queryKey: ["air-data", lat, lon],
    queryFn: () => fetchWeatherData(lat, lon),
    select: (results) => results.data,
  });
}
