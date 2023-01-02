import type { AppProps } from "next/app";
import RNListener from "../components/RNListener";
import { ReactElement, useRef } from "react";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { appTheme } from "~/constants/theme";
import { GlobalStyle } from "~/styles/globalStyle";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "~/react-query/queryClient";
import AxiosProvider from "~/network/AxiosProvider";
import AuthProvider from "~/context/auth";

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
    const queryClientRef = useRef<QueryClient>();
    if (!queryClientRef.current) {
      queryClientRef.current = queryClient;
    }

    return (
      <ThemeProvider theme={appTheme}>
        <AuthProvider>
          <AxiosProvider>
            <QueryClientProvider client={queryClientRef.current}>
              <Hydrate state={props.pageProps.dehydratedState}>
                <RNListener>
                  <GlobalStyle />
                  <MainComponent {...props} />
                  <ReactQueryDevtools position={"top-right"} />
                </RNListener>
              </Hydrate>
            </QueryClientProvider>
          </AxiosProvider>
        </AuthProvider>
      </ThemeProvider>
    );
  };
}

export default withWrapper(App);
