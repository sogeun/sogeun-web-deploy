import { Fragment, PropsWithChildren } from "react";
import styled from "styled-components";
import BottomTabNavigator from "../BottomTabNavigator";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Main>{children}</Main>
      <BottomTabNavigator />
    </Fragment>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 72px;
`;

export default Layout;
