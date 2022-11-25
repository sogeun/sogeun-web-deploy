import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Typo from "../../components/Typo";
import { appTheme } from "../../constants/theme";
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

  const handleSubmit = () => {
    // 로그인 과정 끝낸 후
    router.push("/main");
    sendMessage<AuthTokenPayload>({
      type: WebViewMessageType.SIGN_IN,
      payload: {
        token: "토큰",
      },
    });
  };

  return (
    <div>
      <h1>Typo Test Heading1</h1>
      <h2>Typo Test Heading2</h2>
      <h3>Typo Test Heading3</h3>
      <Form onSubmit={handleSubmit}>
        id
        <input
          type="text"
          onChange={handleChangeId}
          style={{ border: "1px solid black", width: "50%" }}
        />
        pw
        <input
          type="password"
          onChange={handleChangePw}
          style={{ border: "1px solid black", width: "50%" }}
        />
        <button type="submit">로그인</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.S1_B}
`;

export default SignIn;
