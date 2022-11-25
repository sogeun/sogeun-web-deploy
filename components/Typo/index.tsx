import { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";
import { ColorsType, FontType, TypoType } from "../../constants/theme";

export interface TypoProps {
  type: TypoType;
  color: ColorsType;
  fontFamily?: FontType;
  style?: CSSProperties;
}

const Typo = ({
  type = "B1_R",
  color = "BLACK",
  fontFamily = FontType.NOTO_SANS_CJK_KR,
  children,
  style,
}: PropsWithChildren<Partial<TypoProps>>) => {
  return (
    <StyledTypo type={type} color={color} fontFamily={fontFamily} style={style}>
      {children}
    </StyledTypo>
  );
};

const StyledTypo = styled.span<TypoProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ theme, type }) => theme.typo[type]};
  font-family: ${({ fontFamily }) => fontFamily};
`;

export default Typo;
