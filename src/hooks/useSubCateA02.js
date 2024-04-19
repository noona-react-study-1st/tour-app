import { api } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

function fetchSubCateA02(cat2) {
  const params = {
    contentTypeId: 12,
    cat1: 'A02',
    cat2,
  };

  return api.get('/categoryCode1', { params });
}

export function useSubCateA02Query(cat2) {
  return useQuery({
    queryKey: ['subCateA02'],
    enabled: !!cat2,
    queryFn: () => fetchSubCateA02(cat2),
    select: (results) => results.data.response.body.items.item,
  });
}
