import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEventsLately(eventStartDate, arrange) {
  return api.get(
    `/searchFestival1?&eventStartDate=${eventStartDate}&arrange=${arrange}`
  );
}

export function useFetchEventsLatelyQuery({ eventStartDate, arrange }) {
  return useQuery({
    queryKey: ['events-lately', { eventStartDate, arrange }],
    queryFn: () => fetchEventsLately(eventStartDate, arrange),
    select: (results) => results.data,
    retry: 1,
  });
}
