import {api} from '../utils/http';
import {useQuery} from '@tanstack/react-query';

function fetchDetailIntro(contentId, contentTypeId) {
  return api.get(`/detailIntro1?contentId=${contentId}&contentTypeId=${contentTypeId}`);
}

export function useFetchDetailIntroQuery(contentId, contentTypeId) {
  return useQuery({
    queryKey: ['detail-intro', contentId, contentTypeId],
    queryFn: () => fetchDetailIntro(contentId, contentTypeId),
    select: (results) => results.data,
  });
}
