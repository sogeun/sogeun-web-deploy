import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Typo, { TypoProps } from '../components/Typo';

interface TypoWrapperProps {
  args: PropsWithChildren<TypoProps>[];
}

const TypoWrapper = ({ args }: TypoWrapperProps) => {
  return (
    <Container>
      {args.map((arg, idx) => (
        <Typo key={idx.toString()} color={arg.color} type={arg.type}>
          {arg.children}
        </Typo>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TypoWrapper;
