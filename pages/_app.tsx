import "../styles/globals.css";
import type { AppProps } from "next/app";
import RNListener from "../components/RNListener";
import { Fragment, ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Fragment>
      <RNListener>{getLayout(<Component {...pageProps} />)}</RNListener>
    </Fragment>
  );
}
