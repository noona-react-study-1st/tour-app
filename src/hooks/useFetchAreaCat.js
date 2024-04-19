import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchAreaCat(cat1, arrange) {
  return api.get(`/areaBasedList1?&cat1=${cat1}&arrange=${arrange}`);
}

export function useFetchAreaCatQuery({ cat1, arrange }) {
  return useQuery({
    queryKey: ['area-cat', { cat1, arrange }],
    queryFn: () => fetchAreaCat(cat1, arrange),
    select: (results) => results.data,
    retry: 1,
  });
}
