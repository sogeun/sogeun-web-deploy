import { User } from "~/pages/api/signin";
export enum WebViewMessageType {
  WEB_LOADED = "WEB_LOADED",
  INITIALIZED = "INITIALIZED",
  AUTH_TOKEN = "AUTH_TOKEN",
  SESSION_CHECK = "SESSION_CHECK",
  SOCIAL_SIGN_IN = "SOCIAL_SIGN_IN",
  SIGN_IN_COMPLETE = "SIGN_IN_COMPLETE",
}

export interface WebViewMessage<T> {
  type: WebViewMessageType;
  payload: T;
}

export interface AuthTokenPayload {
  token: string | null;
}

export type SocialProvider = "kakao" | "naver" | "google" | "apple";

export interface SocialSignInPayload {
  provider: SocialProvider;
}

export interface SocialSignInInfoPayload extends SocialSignInPayload {
  pId: string;
  accessToken: string;
}

export interface SocialSignInResult {
  token: string;
  user: User;
}
