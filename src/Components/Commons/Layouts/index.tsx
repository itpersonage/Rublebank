import React from "react";
import style from "./Layout.module.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Tprops {
  children: JSX.Element;
}

export const Layout = ({ children }: Tprops) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper_container}>{children}</div>
      <Footer />
    </div>
  );
};
