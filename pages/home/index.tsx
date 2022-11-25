import { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Typo from "../../components/Typo";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Typo>메인페이지입니다.</Typo>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

export default Home;
