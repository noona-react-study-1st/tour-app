import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchCateA01() {
  const params = {
    contentTypeId: 12,
    cat1: 'A01',
  };

  return api.get('/categoryCode1', { params });
}

export function useCateA01Query() {
  return useQuery({
    queryKey: ['cateA01'],
    queryFn: fetchCateA01,
    select: (results) => results.data.response.body.items.item,
  });
}
