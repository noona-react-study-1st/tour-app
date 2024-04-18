import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEvent(eventStartDate, pageNo) {
  return api.get(`/searchFestival1?&pageNo=${pageNo}&eventStartDate=${eventStartDate}&numOfRows=100`);
}

export function useFetchEventQuery({eventStartDate, pageNo}) {
  return useQuery({
    queryKey: ['event', {eventStartDate, pageNo}],
    queryFn: () => fetchEvent(eventStartDate, pageNo),
    select: (results) => results.data,
  });
}
