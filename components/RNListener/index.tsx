import { useRouter } from "next/router";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { requestSocialSignIn } from "~/apis/auth";
import { useAuthActions } from "~/context/auth";
import pages from "~/constants/pages";
import {
  AuthTokenPayload,
  SocialSignInInfoPayload,
  WebViewMessageType,
} from "~/constants/types";
import { parseWebMessage, sendMessage } from "~/utils/message";

const RNListener = ({ children }: PropsWithChildren) => {
  const { setToken, setUser } = useAuthActions();
  const [isSessionChecked, setIsSessionChecked] = useState(false);
  const router = useRouter();

  const socialSignInMutation = useMutation(requestSocialSignIn, {
    onSuccess: (res) => {
      if (res?.token) {
        sendMessage<AuthTokenPayload>({
          type: WebViewMessageType.SIGN_IN_COMPLETE,
          payload: {
            token: res.token,
          },
        });
        setToken(res.token);
        setUser(res.user);
        router.replace(pages.HOME);
      }
    },
    onError: (e) => {
      // 404일때 회원가입 페이지로
    },
  });

  useEffect(() => {
    const listener = (event: any) => {
      const webData = event.data;
      const { type } = JSON.parse(webData);
      switch (type) {
        case WebViewMessageType.SESSION_CHECK:
          const { payload: authTokenPayload } =
            parseWebMessage<AuthTokenPayload>(webData);
          const { token } = authTokenPayload;
          if (token) {
            setToken(token);
            router.replace(pages.HOME);
          } else {
            router.replace(pages.SIGN_IN);
          }
          setIsSessionChecked(true);
          break;
        case WebViewMessageType.SOCIAL_SIGN_IN:
          const { payload: socialSignInPayload } =
            parseWebMessage<SocialSignInInfoPayload>(webData);
          const { provider, pId, accessToken } = socialSignInPayload;
          socialSignInMutation.mutate({
            pId,
            accessToken,
            provider,
          });
          break;
        default:
          break;
      }
    };
    //@ts-ignore
    if (window.ReactNativeWebView) {
      document.addEventListener("message", listener);
      // ios
      window.addEventListener("message", listener);
    }
    return () => {
      document.removeEventListener("message", listener);
      // ios
      window.removeEventListener("message", listener);
    };
  }, [router]);

  // 이니셜라이즈 완료시
  useEffect(() => {
    sendMessage({
      type: WebViewMessageType.INITIALIZED,
      payload: null,
    });
  }, [isSessionChecked]);

  // 로드 완료시
  useEffect(() => {
    sendMessage({
      type: WebViewMessageType.WEB_LOADED,
      payload: null,
    });
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default RNListener;
