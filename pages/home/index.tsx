import { ReactElement } from 'react';
import styled from 'styled-components';
import { axiosUtils } from '~/network/axiosUtils';
import defaultRequest from '~/network/defaultRequest';
import Layout from '../../components/Layout';
import Typo from '../../components/Typo';
import { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = () => {
  const handleTestButtonClick = () => {
    try {
      defaultRequest({
        url: '/api/test',
        method: axiosUtils.POST,
        // requestBody: {
        //   test: '잘되나요',
        // },
      }).then((res) => console.log(res));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container>
      <button onClick={handleTestButtonClick}>테스트 버튼</button>
      <Typo>메인페이지입니다.</Typo>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

export default Home;
