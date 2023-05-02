import React from "react";
import style from "./BestDealCard.module.scss";

type TcardsDataItem = {
  h1: string;
  p: string;
  image: string;
  alt: string;
};

export const BestDealCard = ({ h1, p, image, alt }: TcardsDataItem) => {
  return (
    <div className={style.item}>
      <div className={style.item_text}>
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      <img src={image} alt={alt} />
    </div>
  );
};
