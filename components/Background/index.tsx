import styled from "styled-components";
import routes from "~/constants/routes";
import { ValueOf } from "~/constants/types";
import Image from "next/image";

const getBackgroundImage = (route: ValueOf<typeof routes>) => {
  switch (route) {
    case routes.HOME:
      return `/images/background_1.png`;
    default:
      return `/images/background_1.png`;
  }
};

interface BackgroundProps {
  route: ValueOf<typeof routes>;
}

const Background = ({ route }: BackgroundProps) => {
  return (
    <BackgroundWrap>
      <Image
        src={getBackgroundImage(route)}
        alt="background-image"
        fill
        style={{ objectFit: "cover" }}
      />
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: -1;
`;

export default Background;
