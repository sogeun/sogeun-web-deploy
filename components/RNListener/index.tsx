import { useRouter } from "next/router";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { requestSocialSignIn } from "~/apis/auth";
import { useAuthActions, useAuthState } from "~/context/auth";
import routes from "~/constants/routes";
import {
  AuthTokenPayload,
  DeviceInfoPayload,
  SocialSignInInfoPayload,
  WebViewMessageType,
} from "~/constants/types";
import { parseWebMessage, sendMessage } from "~/utils/message";
import { useMutation } from "react-query";
import { ParsedStorage } from "~/utils/storage";
import { useCommonActions } from "~/context/common";

const RNListener = ({ children }: PropsWithChildren) => {
  const { user } = useAuthState();
  const { setToken, setUser } = useAuthActions();
  const { setDeviceInfo } = useCommonActions();
  const [isSessionChecked, setIsSessionChecked] = useState(false);
  const [tutorialCheck, setTutorialCheck] = useState({
    isCheck: false,
    isViewed: false,
  });
  const [isInitializeCheck, setIsInitializeCheck] = useState(false);
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
        router.replace(routes.HOME);
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
        case WebViewMessageType.DEVICE_INFO:
          const { payload: deviceInfo } =
            parseWebMessage<DeviceInfoPayload>(webData);
          setDeviceInfo(deviceInfo);
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

  // 튜토리얼 체크
  useEffect(() => {
    if (!tutorialCheck.isCheck && isSessionChecked) {
      const isTutorialViewed = ParsedStorage.getItem("isTutorialViewed");
      setTutorialCheck({ isCheck: true, isViewed: !!isTutorialViewed });
    }
  }, [router, tutorialCheck, isSessionChecked]);

  // 세션 체크
  useEffect(() => {
    if (!isSessionChecked) {
      const authToken = ParsedStorage.getItem("authToken");
      if (authToken?.token) {
        // 세션 체크 요청 후
        setUser({
          name: "이름",
          age: 29,
          address: "서울",
        });
      } else {
        // setUser({
        //   name: "이름",
        //   age: 29,
        //   address: "서울",
        // });
      }
      setIsSessionChecked(true);
    }
  }, [isSessionChecked, setToken, setUser]);

  // 초기 라우팅
  useEffect(() => {
    if (!isInitializeCheck) {
      if (tutorialCheck.isCheck && isSessionChecked) {
        if (user) {
          router.replace(routes.HOME);
        } else {
          if (tutorialCheck.isViewed) {
            router.replace(routes.SIGN_IN);
          } else {
            router.replace(`${routes.TUTORIAL}/1`);
          }
        }
        setIsInitializeCheck(true);
      }
    }
  }, [user, tutorialCheck, isInitializeCheck, isSessionChecked, router]);

  // // 이니셜라이즈 완료시
  useEffect(() => {
    if (isInitializeCheck) {
      sendMessage({
        type: WebViewMessageType.INITIALIZED,
        payload: null,
      });
    }
  }, [isInitializeCheck]);

  useEffect(() => {
    sendMessage({
      type: WebViewMessageType.WEB_LOADED,
      payload: null,
    });
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default RNListener;
