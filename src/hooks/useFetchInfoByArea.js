import { tourApi } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchInfoByArea({
  areaCode,
  sigunguCode,
  contentTypeId,
  numOfRows,
  pageNo,
}) {
  const params = {
    areaCode,
    sigunguCode,
    contentTypeId,
    numOfRows,
    pageNo,
    arrange: 'R',
  };
  return tourApi.get('/areaBasedList1', { params });
}

export function useFetchInfoByAreaQuery({
  areaCode,
  sigunguCode,
  contentTypeId,
  numOfRows,
  pageNo,
}) {
  return useQuery({
    queryKey: [
      'area',
      { areaCode, sigunguCode, contentTypeId, numOfRows, pageNo },
    ],
    queryFn: () =>
      fetchInfoByArea({
        areaCode,
        sigunguCode,
        contentTypeId,
        numOfRows,
        pageNo,
      }),
    select: (results) => results.data,
    staleTime: 5 * 60 * 1000,
  });
}
