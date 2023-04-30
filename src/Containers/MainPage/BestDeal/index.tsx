import React from "react";
import style from "./BestDeal.module.scss";

export const BestDeal = () => {
  return (
    <div className={style.best_deal}>
      <div className={style.container}>
        <h1>Лучшие предложения в Рубльбанке</h1>
        <p>Банковские продукты для комфортной жизни</p>
        <div className={style.best_deal_items}>
          <div className={style.item}>
            <div className={style.item_text}>
              <h1>Ипотечное кредитование</h1>
              <p>Программы господдержки Выгодные условия</p>
            </div>
            <img
              src="./images/mortgage_insurance.jpg"
              alt="mortgage_insurance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
