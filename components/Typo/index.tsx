import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ColorsType, TypoType } from "../../constants/theme";

interface TypoProps {
  type: TypoType;
  color: ColorsType;
}

const Typo = ({
  type = "B1_R",
  color = "BLACK",
  children,
}: PropsWithChildren<Partial<TypoProps>>) => {
  return (
    <StyledTypo type={type} color={color}>
      {children}
    </StyledTypo>
  );
};

const StyledTypo = styled.span<TypoProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ theme, type }) => theme.typo[type]};
`;

export default Typo;
