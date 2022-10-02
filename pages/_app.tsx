import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <header id="header">news api🍀</header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
