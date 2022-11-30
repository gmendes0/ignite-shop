import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../styles/stitches.config";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/**
         * Carrega todo o css necessário para renderizar cada página no modo SSR
         *
         * Vantagem:
         *  - O lado do server provavelmente é gera o CSS mais rápido do que o client
         */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
