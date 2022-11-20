import "../styles/globals.css";
import type { AppProps } from "next/app";
import RNListener from "./components/RNListener";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RNListener>
      <Component {...pageProps} />
    </RNListener>
  );
}
