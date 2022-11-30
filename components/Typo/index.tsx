import { PropsWithChildren } from 'react';
import styled, { CSSObject } from 'styled-components';
import { ColorsType, TypoType } from '../../constants/theme';

export interface TypoProps {
  type: TypoType;
  color: ColorsType;
  style?: CSSObject;
}

const Typo = ({
  type = 'B1_R',
  color = 'BLACK',
  children,
  style,
}: PropsWithChildren<Partial<TypoProps>>) => {
  return (
    <StyledTypo type={type} color={color} style={style}>
      {children}
    </StyledTypo>
  );
};

const StyledTypo = styled.span<TypoProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ theme, type }) => theme.typo[type]};
`;

export default Typo;
