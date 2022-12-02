import { useQuery } from 'react-query';
import { queryKeys } from '~/react-query/constants';
import { getUserInfo } from '~/apis/mypage';
import { commentOptions } from '~/react-query/queryOptions';

export function useMypageQuery() {
  const { data = [] } = useQuery([queryKeys.mypage, 1], getUserInfo, {
    ...commentOptions(5000, 300000),
  });

  return data;
}
