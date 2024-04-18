import {api} from '../utils/http';
import {useQuery} from '@tanstack/react-query';

function fetchDetailInfo(contentId, contentTypeId) {
    return api.get(`/detailInfo1?contentId=${contentId}&contentTypeId=${contentTypeId}`);
}

export function useFetchDetailInfoQuery(contentId, contentTypeId) {
    return useQuery({
        queryKey: ['detail-info', contentId, contentTypeId],
        queryFn: () => fetchDetailInfo(contentId, contentTypeId),
        select: (results) => results.data.response.body.items.item,
    });
}
