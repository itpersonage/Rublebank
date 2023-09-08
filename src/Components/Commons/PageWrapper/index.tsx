import React from "react";
import style from "./PageWrapper.module.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

export const PageWrapper = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper_container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
