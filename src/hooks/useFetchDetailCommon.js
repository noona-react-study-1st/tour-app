import {api} from '../utils/http';
import {useQuery} from '@tanstack/react-query';

function fetchDetailCommon(contentId) {
  return api.get(
    `/detailCommon1?contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&contentId=${contentId}`
  );
}

export function useFetchDetailCommonQuery(contentId) {
  return useQuery({
    queryKey: ['detail-common', contentId],
    queryFn: () => fetchDetailCommon(contentId),
    select: (results) => results.data,
  });
}
