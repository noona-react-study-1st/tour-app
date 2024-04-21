import { useQuery } from "@tanstack/react-query";
import { airApi } from "../utils/http";

function fetchAirData(area) {
  const processedArea = area === "서울특별시" ? "서울" : area;
  return airApi.get(`/getCtprvnRltmMesureDnsty?&sidoName=${processedArea}`);
}

export function useFetchAirDataQuery(area) {
  // console.log("area", area);
  return useQuery({
    queryKey: ["air-data", area],
    queryFn: () => fetchAirData(area),
    select: (results) => results.data,
  });
}
