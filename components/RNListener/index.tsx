import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import pages from '../../constants/pages';
import { AuthTokenPayload, WebViewMessageType } from '../../constants/types';
import { parseWebMessage, sendMessage } from '../../utils/message';

const RNListener = ({ children }: PropsWithChildren) => {
  const [isSessionChecked, setIsSessionChecked] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const listener = (event: any) => {
      const webData = event.data;
      const { type } = JSON.parse(webData);
      switch (type) {
        case WebViewMessageType.SESSION_CHECK:
          const { payload } = parseWebMessage<AuthTokenPayload>(webData);
          const { token } = payload;
          if (token) {
            router.replace(pages.HOME);
          } else {
            router.replace(pages.SIGN_IN);
          }
          setIsSessionChecked(true);
          break;
        default:
          break;
      }
    };
    //@ts-ignore
    if (window.ReactNativeWebView) {
      document.addEventListener('message', listener);
      // ios
      window.addEventListener('message', listener);
    }
    return () => {
      document.removeEventListener('message', listener);
      // ios
      window.removeEventListener('message', listener);
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
