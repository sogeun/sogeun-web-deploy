import { useRouter } from "next/router";
import { ChangeEvent, FormEventHandler, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import pages from "../../constants/pages";
import { AuthTokenPayload, WebViewMessageType } from "../types";
import { sendMessage } from "../utils";

const SignIn = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // 로그인 과정 끝낸 후
    router.push(pages.HOME);
    sendMessage<AuthTokenPayload>({
      type: WebViewMessageType.SIGN_IN,
      payload: {
        token: "토큰",
      },
    });
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Typo Test Heading1</h1>
      <h2>Typo Test Heading2</h2>
      <h3>Typo Test Heading3</h3>
      <Button>로그인</Button>
      <Button buttonType={"outline"} hasNextButton>
        로그인
      </Button>
      <Button>로그인</Button>
      <Button>로그인</Button>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.B1_R_PC}
`;

export default SignIn;
