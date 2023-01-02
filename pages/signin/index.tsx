import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import {
  SocialProvider,
  SocialSignInPayload,
  WebViewMessageType,
} from "~/constants/types";
import { useAuthActions } from "~/context/auth";
import { sendMessage } from "~/utils/message";
import Button from "../../components/Button";
import pages from "../../constants/pages";

const SignIn = () => {
  const router = useRouter();
  const { setToken } = useAuthActions();

  const handleSocialSignIn = (provider: SocialProvider) => () => {
    // @ts-ignore
    if (window?.ReactNativeWebView) {
      // 앱 소셜 로그인
      sendMessage<SocialSignInPayload>({
        type: WebViewMessageType.SOCIAL_SIGN_IN,
        payload: {
          provider,
        },
      });
    } else {
      // 웹 소셜 로그인
      setToken("temp token");
      router.push(pages.HOME);
    }
  };

  useEffect(() => {
    router.beforePopState(() => false);
  }, [router]);

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
