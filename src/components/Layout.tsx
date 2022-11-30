import { ReactNode } from "react";

import logoSVG from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header>
        <img src={logoSVG.src} alt="" />
      </Header>

      {props.children}
    </>
  );
}
