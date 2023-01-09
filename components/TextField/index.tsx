import React, { Fragment } from "react";
import styled from "styled-components";

interface Props {
  label?: string;
  placeholder?: string;
  onChange?: () => {};
}

const TextField = ({ label, placeholder, onChange }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <EleInput onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin-left: 5px;

  width: 35px;
  height: 22px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  letter-spacing: -0.01em;

  /* white */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

const EleInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  gap: 192px;

  width: 333px;
  height: 52px;

  /* Gray_03 */

  border: 1px solid #7f848b;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 333px;
  height: 78px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default TextField;
