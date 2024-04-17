import { tourApi } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchAreaCode(areaCode, totalCount) {
  return tourApi.get(`/areaCode1?areaCode=${areaCode}&numOfRows=${totalCount}`);
}

export function useFetchAreaCodeQuery(areaCode, totalCount) {
  return useQuery({
    queryKey: ['areaCode', { areaCode }],
    queryFn: () => fetchAreaCode(areaCode, totalCount),
    select: (results) => results.data,
  });
}
