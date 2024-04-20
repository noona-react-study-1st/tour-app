import {api} from '../utils/http';
import {useQuery} from '@tanstack/react-query';

function fetchDetailImage(contentId) {
  return api.get(`/detailImage1?imageYN=Y&subImageYN=Y&contentId=${contentId}`);
}

export function useFetchDetailImageQuery(contentId) {
  return useQuery({
    queryKey: ['detail-image', contentId],
    queryFn: () => fetchDetailImage(contentId),
    select: (results) => results.data,
  });
}
