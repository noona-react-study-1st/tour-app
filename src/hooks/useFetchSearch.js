import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchSearch(keyword) {
  return api.get(`/searchKeyword1?&keyword=${keyword}&arrange=O&numOfRows=100`);
}

export function useFetchSearchQuery(keyword) {
  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => fetchSearch(keyword),
    select: (results) => results.data.response.body.items.item,
  });
}
