import React from "react";
import style from "./Cards.module.scss";

export const Cards = () => {
  return (
    <div className={style.cards}>
      <div className={style.container}>
        <div className={style.card_60}>
          <div className={style.card_60_top}>
            <h1>
              Кредитная карта 60 дней <br /> без процентов
            </h1>
            <img src="./images/card60.png" alt="card60" />
          </div>
          <div className={style.card_60_bottom}>
            <div className={style.card_60_bottom_offer}>
              <div className={style.card_60_bottom_offer_item}>
                <h1>500 000 ₽</h1>
                <p>лимит <br /> по карте</p>
              </div>
            </div>
            <div className={style.card_60_bottom_btn}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
