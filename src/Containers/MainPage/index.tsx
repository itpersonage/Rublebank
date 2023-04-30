import React from "react";
import style from "./MainPage.module.scss";
import { MainBanner } from "./MainBanner";
import { BestDeal } from "./BestDeal";

export const MainPage = () => {
  return (
    <div className={style.main_page}>
      <MainBanner />
      <BestDeal />
    </div>
  );
};
