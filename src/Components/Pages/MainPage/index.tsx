import React from "react";
import { MainBanner } from "./MainBanner";
import { BestDeal } from "./BestDeal";
import { Cards } from "./Cards";

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
      <Cards />
    </div>
  );
};
