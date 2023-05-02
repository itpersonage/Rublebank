import React from "react";
import { MainBanner } from "./MainBanner";
import { BestDeal } from "./BestDeal";

type TcardsData = {
  cardsData: {
    h1: string;
    p: string;
    image: string;
    alt: string;
  }[];
};

export const MainPage = ({ cardsData }: TcardsData) => {
  return (
    <div>
      <MainBanner />
      <BestDeal cardsData={cardsData} />
    </div>
  );
};
