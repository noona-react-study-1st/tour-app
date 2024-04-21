import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEvent(eventStartDate, arrange) {
  return api.get(
    `/searchFestival1?&eventStartDate=${eventStartDate}&arrange=${arrange}&numOfRows=100`
  );
}

export function useFetchEventQuery({ eventStartDate, arrange }) {
  return useQuery({
    queryKey: ['event', { eventStartDate, arrange }],
    queryFn: () => fetchEvent(eventStartDate, arrange),
    select: (results) => results.data,
  });
}
