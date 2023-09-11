import React from "react";
import style from "./BestDeal.module.scss";
import { BestDealCard } from "./BestDealCard";

type TcardsData = {
  cardsData: {
    id: number,
    h1: string;
    p: string;
    image: string;
    alt: string;
  }[];
};

export const BestDeal = ({ cardsData }: TcardsData) => {
  return (
    <div className={style.best_deal}>
      <div className={style.container}>
        <h1>Лучшие предложения в Рубльбанке</h1>
        <p>Банковские продукты для комфортной жизни</p>
        <div className={style.best_deal_items}>
        {cardsData.map((el) => (
        <BestDealCard key={el.id} h1={el.h1} p={el.p} image={el.image} alt={el.alt} />
      ))}
        </div>
      </div>
    </div>
  );
};
