import React from "react";
import style from "./DebetCardPage.module.scss";
import { DebetCardItem } from "./DebetCardItem";

type TdebetCardData = {
  debetCardData: {
    id: number,
    h1: string;
    p: string;
    image: string;
    alt: string;
  }[];
};

export const DebetCardPage = ({ debetCardData }: TdebetCardData) => {
  return (
    <div className={style.debet_card_page}>
      <div className={style.container}>
        <h1>Дебетовые карты</h1>
        <div className={style.debet_card_items}>
          {debetCardData.map((el) => (
            <DebetCardItem key={el.id} h1={el.h1} p={el.p} image={el.image} alt={el.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};
