import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchEventCarousel(eventStartDate) {
  return api.get(`/searchFestival1?&eventStartDate=${eventStartDate}&numOfRows=3`);
}

export function useFetchEventCarouselQuery({eventStartDate}) {
  return useQuery({
    queryKey: ['event-carousel', {eventStartDate}],
    queryFn: () => fetchEventCarousel(eventStartDate),
    select: (results) => results.data.response.body.items.item,
  });
}
