import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchAreaCat(cat1) {
  return api.get(`/areaBasedList1?&ContentTypeId=${cat1}&arrange=Q`);
}

export function useFetchAreaCatQuery({ cat1 }) {
  return useQuery({
    queryKey: ['area-cat', { cat1 }],
    queryFn: () => fetchAreaCat(cat1),
    select: (results) => results.data,
    retry: 1,
  });
}
