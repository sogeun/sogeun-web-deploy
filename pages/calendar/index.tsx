import { ReactElement } from "react";
import Typo from "~/components/Typo";
import MainTabLayout from "../../components/MainTabLayout";
import { NextPageWithLayout } from "../_app";

const Calendar: NextPageWithLayout = () => {
  return <Typo>캘린더가 나올 페이지에용</Typo>;
};

Calendar.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default Calendar;
