import {WebViewMessage} from './types';

export const sendMessage = <T>(
  message: WebViewMessage<T>,
) => {
    //@ts-ignore
    if (window?.ReactNativeWebView) {
        //@ts-ignore
        window.ReactNativeWebView.postMessage(JSON.stringify(message))

    }
};

export const parseWebMessage = <T>(webData: string) => {
  return JSON.parse(webData) as WebViewMessage<T>;
};
