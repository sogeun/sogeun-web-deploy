import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Map: NextPageWithLayout = () => {
  return <div>지도가 나올 페이지에용</div>;
};

Map.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Map;
