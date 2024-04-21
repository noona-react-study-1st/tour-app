import { tourApi } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchInfoByArea({ areaCode, sigunguCode, contentTypeId }) {
  const params = {
    areaCode,
    sigunguCode,
    contentTypeId,
    numOfRows: 1000,
    pageNo: 1,
    arrange: 'R',
  };
  return tourApi.get('/areaBasedList1', { params });
}

export function useFetchInfoByAreaQuery({
  areaCode,
  sigunguCode,
  contentTypeId,
}) {
  return useQuery({
    queryKey: ['area', { areaCode, sigunguCode, contentTypeId }],
    queryFn: () =>
      fetchInfoByArea({
        areaCode,
        sigunguCode,
        contentTypeId,
      }),
    select: (results) => results.data,
    staleTime: 5 * 60 * 1000,
  });
}
