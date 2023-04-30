import React from "react";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.items}>
          <div className={style.item_1}>
            <span>© 2001-2020 Рубльбанк</span>
            <p>
              Генеральная лицензия на осуществление банковских операций от 11
              августа 2015 года. Регистрационный номер - 1234.
            </p>
          </div>
          <div className={style.item_2}>
            <span>Обратная связь</span>
            <p>Россия, Москва, 113337, ул. Советская, д. 42</p>
          </div>
          <div className={style.item_3}>
            <p>
              Информация о процентных ставках по договорам банковского вклада с
              физическими лицами
            </p>
            <p>Информация, обязательная к размещению</p>
          </div>
        </div>
      </div>
    </div>
  );
};
