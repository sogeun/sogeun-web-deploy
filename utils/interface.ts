import { useRouter } from "next/router";
import { useCommonState } from "~/context/common";
import { RoutePayload, WebViewMessageType } from "~/constants/types";
import { sendMessage } from "./message";

export function useInterface() {
  const router = useRouter();
  const { deviceInfo } = useCommonState();
  const webLoaded = () => {
    sendMessage({
      type: WebViewMessageType.WEB_LOADED,
      payload: null,
    });
  };

  const initializeComplete = () => {
    sendMessage({
      type: WebViewMessageType.INITIALIZED,
      payload: null,
    });
  };

  const pushNavigation = (url: string) => {
    if (deviceInfo?.platform === "ios") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.PUSH_NAVIGATION,
        payload: { url },
      });
    } else {
      router.push(url);
    }
  };

  const replaceNavigation = (url: string) => {
    if (deviceInfo?.platform === "ios") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.REPLACE_NAVIGATION,
        payload: { url },
      });
    } else {
      router.replace(url);
    }
  };

  const popNavigation = () => {
    if (deviceInfo?.platform === "ios") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.PUSH_NAVIGATION,
        payload: { url: "" },
      });
    } else {
      router.back();
    }
  };
  return {
    webLoaded,
    initializeComplete,
    pushNavigation,
    replaceNavigation,
    popNavigation,
  };
}
