import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Group: NextPageWithLayout = () => {
  return <div>그룹페이지에용</div>;
};

Group.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Group;
