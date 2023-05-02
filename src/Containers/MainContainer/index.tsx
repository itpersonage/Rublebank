import React from "react";
import { MainPage } from "../../Components/Pages/MainPage";
import { cardsData } from "../../helpers";

export const MainContainer = () => {
  return (
    <div>
      <MainPage cardsData={cardsData} />
    </div>
  );
};
