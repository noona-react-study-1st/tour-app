import { api } from "../utils/http";
import { useQuery } from "@tanstack/react-query";

function fetchDetailInfo(contentId) {
  return api.get(`/detailInfo1?contentTypeId=12&contentId=${contentId}`);
}

export function useFetchDetailInfoQuery(contentId) {
  return useQuery({
    queryKey: ["detail-info", contentId],
    queryFn: () => fetchDetailInfo(contentId),
    select: (results) => results.data.response.body.items.item,
  });
}
