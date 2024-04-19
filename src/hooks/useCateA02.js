import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchCateA02() {
  const params = {
    contentTypeId: 12,
    cat1: 'A02',
  };

  return api.get('/categoryCode1', { params });
}

export function useCateA02Query() {
  return useQuery({
    queryKey: ['cateA02'],
    queryFn: fetchCateA02,
    select: (results) => results.data.response.body.items.item,
  });
}
