import React from "react";
import style from './DebetCardPage.module.scss';
import { DebetCardItem } from "./DebetCardItem";

type TdebetCardData = {
  debetCardData: {
    h1: string;
    p: string;
    image: string;
    alt: string;
  }[];
};

export const DebetCardPage = ({debetCardData}:TdebetCardData ) => {
  return (
    <div className={style.debet_card_page}>
        <div className={style.container}>
            <div className={style.debet_card_items}>
                {debetCardData.map((el) => (
                    <DebetCardItem h1={el.h1} p={el.p} img={el.img} alt={el.alt} />
                ))}
            </div>
        </div>
    </div>
  )
};
