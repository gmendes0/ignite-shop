import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

/**
 * Como os estilos globais nao mudam de uma página para outra, o melhor
 * lugar para chamar o globalStyles é fora do componente App
 */
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
}
