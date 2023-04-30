import React from "react";
import style from "./Layout.module.scss";
import { Header } from "../Components/Commons/Header";
import { Footer } from "../Components/Commons/Footer";

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
