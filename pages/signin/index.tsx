import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import {
  SocialProvider,
  SocialSignInPayload,
  WebViewMessageType,
} from "~/constants/types";
import { useAuthActions } from "~/context/auth";
import useHistoryManager from "~/hooks/useHistoryManager";
import { sendMessage } from "~/utils/message";
import Button from "../../components/Button";
import routes from "../../constants/routes";

const SignIn = () => {
  const router = useRouter();
  const history = useHistoryManager();
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
      router.push(routes.HOME);
    }
  };

  useEffect(() => {
    history.disableGoBack();
  }, [history]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Typo Test Heading1</h1>
      <h2>Typo Test Heading2</h2>
      <h3>Typo Test Heading3</h3>
      <Button onClick={handleSocialSignIn("google")}>구글 로그인</Button>
      <Button onClick={handleSocialSignIn("kakao")}>카카오 로그인</Button>
      {/* <Button onClick={handleSocialSignIn("apple")}>애플 로그인</Button> */}
    </div>
  );
};

export default SignIn;
