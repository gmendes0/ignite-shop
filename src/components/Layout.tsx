import Image from "next/image";
import { ReactNode } from "react";

import logoSVG from "../assets/logo.svg";
import { Header } from "../styles/components/layout";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header>
        {/**
         * Otmiza a imagem automaticamente
         *
         * Por exemplo: se temos uma imagem salva com o tamanho de 1080px de largura, mas
         * ela vai ser colocada na tela em um container de 256px, não é necessário
         * carregar a imagem com o tamanho original de 1080px. Ou caso a imagem que esta
         * salva está no formato png mas ela nao possui transparencia, ou seja, seria melhor
         * utilizar jpg que é mais leve.
         *
         * O componente Image consegue:
         *  - Criar uma versão da imagem com o tamanho que a gente vai utilizar e usar essa
         *    versão no lugar da original
         *  - Converter o formato da imagem
         *  - Cria imagem menores para dispositivos móveis, já que no mobile nao faz sentido
         *    carregar uma imagem gigante para diminuir depois
         *
         * É importante passar uma height e width para que o next redimensione a imagem
         * para o tamanho que vamos usar.
         */}
        <Image src={logoSVG} alt="" />
      </Header>

      {props.children}
    </>
  );
}
