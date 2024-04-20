import { api } from "../utils/http";
import { useQuery } from "@tanstack/react-query";

function fetchDetailPetTour(contentId) {
  return api.get(`/detailPetTour1?contentId=${contentId}`);
}

export function useFetchDetailPetTourQuery(contentId) {
  return useQuery({
    queryKey: ["detail-pet", contentId],
    queryFn: () => fetchDetailPetTour(contentId),
    select: (results) => results.data,
  });
}
