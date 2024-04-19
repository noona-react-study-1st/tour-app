import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchAreaLately() {
  return api.get('/areaBasedList1?arrange=Q&contentTypeId=25');
}

export function useFetchAreaLatelyQuery() {
  return useQuery({
    queryKey: ['area-lately'],
    queryFn: fetchAreaLately,
    select: (results) => results.data,
    retry: 1,
  });
}
