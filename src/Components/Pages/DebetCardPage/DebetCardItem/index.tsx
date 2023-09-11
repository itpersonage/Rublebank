import React from "react";
import style from "./DebetCardItem.module.scss";
import { Button } from "../../../Commons/Button";
import { Link } from "react-router-dom";

type TdebetCardItem = {
  h1: string;
  p: string;
  image: string;
  alt: string;
};

export const DebetCardItem = ({ h1, p, image, alt }: TdebetCardItem) => {
  return (
    <div className={style.debet_card_item}>
      <img src={image} alt={alt} />
      <div className={style.debet_card_item_text}>
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className={style.debet_card_item_btn}>
          <Link to="/Debet_card_design" className={style.btn}>
            <Button title="Оформить карту" />
          </Link>
          <Link to="/Debet_card_more" className={style.btn}>
            <Button title="Подробнее" />
          </Link>
        </div>
      </div>
    </div>
  );
};
