import { ReactElement } from "react";
import Layout from "~/components/Layout";
import { NextPageWithLayout } from "../_app";
import { useMypageQuery } from "~/hooks/mypage/useMypage";

const MyPage: NextPageWithLayout = () => {
  const data = useMypageQuery();

  // @ts-ignore
  const { name, age, address } = data;

  return (
    <>
      <div>마이페이지</div>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <div>주소 : {address}</div>
    </>
  );
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MyPage;
