import { ReactElement } from "react";
import MainTabLayout from "~/components/MainTabLayout";
import { NextPageWithLayout } from "../_app";
import { useMypageQuery } from "~/hooks/mypage/useMypage";
import Button from "~/components/Button";
import { useAuthActions } from "~/context/auth";
import { ParsedStorage } from "~/utils/storage";
import { useRouter } from "next/router";

const MyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const data = useMypageQuery();
  const { clearUser } = useAuthActions();

  // @ts-ignore
  const { name, age, address } = data;

  const handleSignOut = () => {
    clearUser();
    ParsedStorage.removeItem("authToken");
    router.replace("/signin");
  };

  return (
    <div style={{ backgroundColor: "#000", height: "100%" }}>
      <div>마이페이지</div>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <div>주소 : {address}</div>
      <Button title="로그아웃" onClick={handleSignOut} />
    </div>
  );
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default MyPage;
