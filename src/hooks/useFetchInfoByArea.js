import { tourApi } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchInfoByArea() {
  return tourApi.get('/areaBasedList1');
  // return response.data;
}

export function useFetchInfoByAreaQuery() {
  return useQuery({
    queryKey: ['area'],
    queryFn: fetchInfoByArea,
    select: (results) => results.data,
  });
}
