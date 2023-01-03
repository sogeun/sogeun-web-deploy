import { ReactElement } from "react";
import MainTabLayout from "../../components/MainTabLayout";
import { NextPageWithLayout } from "../_app";

const Group: NextPageWithLayout = () => {
  return <div>그룹페이지에용</div>;
};

Group.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default Group;
