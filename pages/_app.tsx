import "../styles/globals.css";
import type { AppProps } from "next/app";
import RNListener from "../components/RNListener";
import { ReactElement } from "react";
import { NextPage } from "next";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { appTheme } from "../constants/theme";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

function withWrapper(
  MainComponent: ({ Component, pageProps }: AppPropsWithLayout) => JSX.Element
) {
  return function MyApp(props: AppPropsWithLayout) {
    return (
      <ThemeProvider theme={appTheme}>
        <RNListener>
          <MainComponent {...props} />
        </RNListener>
      </ThemeProvider>
    );
  };
}

export default withWrapper(App);
