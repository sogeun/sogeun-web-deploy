import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const MyPage: NextPageWithLayout = () => {
  return <div>마이페이지에용</div>;
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MyPage;
