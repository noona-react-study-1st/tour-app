import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEvent(eventStartDate) {
  return api.get(`/searchFestival1?&eventStartDate=${eventStartDate}`);
}

export function useFetchEventQuery({eventStartDate}) {
  return useQuery({
    queryKey: ['event', eventStartDate],
    queryFn: () => fetchEvent(eventStartDate),
    select: (results) => results.data.response.body,
  });
}
