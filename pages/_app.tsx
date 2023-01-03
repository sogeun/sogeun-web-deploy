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
import CommonProvider from "~/context/common";
import { useRouter } from "next/router";
import Background from "~/components/Background";
import { ValueOf } from "~/constants/types";
import routes from "~/constants/routes";
import Layout from "~/components/Layout";

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
    const router = useRouter();
    const { route } = router;
    const queryClientRef = useRef<QueryClient>();
    if (!queryClientRef.current) {
      queryClientRef.current = queryClient;
    }

    return (
      <ThemeProvider theme={appTheme}>
        <CommonProvider>
          <AuthProvider>
            <AxiosProvider>
              <QueryClientProvider client={queryClientRef.current}>
                <Hydrate state={props.pageProps.dehydratedState}>
                  <RNListener>
                    <GlobalStyle />
                    <Background route={route as ValueOf<typeof routes>} />
                    <Layout>
                      <MainComponent {...props} />
                    </Layout>
                    <ReactQueryDevtools position={"top-right"} />
                  </RNListener>
                </Hydrate>
              </QueryClientProvider>
            </AxiosProvider>
          </AuthProvider>
        </CommonProvider>
      </ThemeProvider>
    );
  };
}

export default withWrapper(App);
