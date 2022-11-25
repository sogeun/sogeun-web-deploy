import { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
  return <Container>메인페이지에용</Container>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Container = styled.div``;

export default Home;
