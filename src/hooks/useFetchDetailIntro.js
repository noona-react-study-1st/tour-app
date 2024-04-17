import {api} from '../utils/http';
import {useQuery} from '@tanstack/react-query';

function fetchDetailIntro(contentId) {
  return api.get(`/detailIntro1?&contentId=${contentId}`);
}

export function useFetchDetailIntroQuery(contentId) {
  return useQuery({
    queryKey: ['detail-intro', contentId],
    queryFn: () => fetchDetailIntro(contentId),
    select: (results) => results.data,
  });
}
