import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchSubCateA01(cat2) {
  const params = {
    contentTypeId: 12,
    cat1: 'A01',
    cat2,
  };

  return api.get('/categoryCode1', { params });
}

export function useSubCateA01Query(cat2) {
  return useQuery({
    queryKey: ['subCateA01'],
    enabled: !!cat2,
    queryFn: () => fetchSubCateA01(cat2),
    select: (results) => results.data.response.body.items.item,
  });
}
