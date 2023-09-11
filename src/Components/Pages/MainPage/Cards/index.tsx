import React from "react";
import style from "./Cards.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../../Commons/Button";

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
                <div className={style.card_60_offer_item_border}></div>
                <p>
                  лимит <br /> по карте
                </p>
              </div>
              <div className={style.card_60_bottom_offer_item}>
                <h1>от 12%</h1>
                <div className={style.card_60_offer_item_border}></div>
                <p>
                  ставка <br /> по карте
                </p>
              </div>
              <div className={style.card_60_bottom_offer_item}>
                <h1>1 день</h1>
                <div className={style.card_60_offer_item_border}></div>
                <p>
                  решение <br /> по заявке
                </p>
              </div>
            </div>
          </div>
          <div className={style.card_60_btn}>
            <Link to="/Card60_design">
              <Button title="Оформить карту" />
            </Link>
            <Link to="/Card60_more">
              <Button title="Подробнее" />
            </Link>
          </div>
        </div>
        <div className={style.block_cards_right}>
          <div>
            <h1>
              Кредитные <br /> карты
            </h1>
            <Link to="Credit_card">
              <img src="./images/arrow_cards.png" alt="Credit_card" />
            </Link>
          </div>
          <div>
            <h1>
              Дебетовые <br /> карты
            </h1>
            <Link to="Debet_card">
              <img src="./images/arrow_cards.png" alt="Debet_card" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
