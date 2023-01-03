import { ReactElement } from "react";
import MainTabLayout from "../../components/MainTabLayout";
import { NextPageWithLayout } from "../_app";

const Map: NextPageWithLayout = () => {
  return <div>지도가 나올 페이지에용</div>;
};

Map.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default Map;
