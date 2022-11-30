import { useQuery } from 'react-query';
import { queryKeys } from '~/react-query/constants';
import { getUserInfo } from '~/apis/mypage';

export function useMypageQuery() {
  const { data = [] } = useQuery([queryKeys.mypage, 1], getUserInfo);

  return data;
}
