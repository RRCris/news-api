import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="nueva app de noticias" content="noticias del mundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
