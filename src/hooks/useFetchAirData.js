import { useQuery } from "@tanstack/react-query";
import { airApi } from "../utils/http";

function fetchAirData(area) {
  return airApi.get(`/getCtprvnRltmMesureDnsty?&sidoName=${area}`);
}

export function useFetchAirDataQuery(area) {
  console.log("area", area);
  return useQuery({
    queryKey: ["air-data", area],
    queryFn: () => fetchAirData(area),
    select: (results) => results.data,
  });
}
