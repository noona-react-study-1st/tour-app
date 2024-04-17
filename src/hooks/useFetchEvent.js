import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEvent() {
  return api.get('/searchFestival1');
}

export function useFetchEventQuery() {
  return useQuery({
    queryKey: ['event'],
    queryFn: fetchEvent,
    select: (results) => results.data,
  });
}
