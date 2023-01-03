import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import Button from "~/components/Button";
import routes from "~/constants/routes";
import useHistoryManager from "~/hooks/useHistoryManager";
import { axiosUtils } from "~/network/axiosUtils";
import defaultRequest from "~/network/defaultRequest";
import MainTabLayout from "../../components/MainTabLayout";
import Typo from "../../components/Typo";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const history = useHistoryManager();
  const handleTestButtonClick = () => {
    try {
      defaultRequest({
        url: "/api/test",
        method: axiosUtils.POST,
        // requestBody: {
        //   test: '잘되나요',
        // },
      }).then((res) => console.log(res));
    } catch (e) {
      console.error(e);
    }
  };
  // router.push('/home/123');

  useEffect(() => {
    history.disableGoBack();
  }, [history]);
  return (
    <Container>
      <button onClick={handleTestButtonClick}>테스트 버튼</button>
      <Typo>메인페이지입니다.</Typo>
      <Button onClick={() => router.push(routes.TUTORIAL)}>튜토리얼</Button>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

const Container = styled.div``;

export default Home;
