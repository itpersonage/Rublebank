import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.nav_logo}>
        <div className={style.container}>
          <div className={style.nav_logo_left}>
            <Link to="/" className={style.logo}>
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <ul>
              <li>Частным клиентам</li>
              <li>Бизнесу</li>
              <li>Самозанятым</li>
            </ul>
          </div>
          <div className={style.nav_logo_right}>
            <Link to="/ATM">Оделения и банкоматы</Link>
            <Link to="/RublebankOnline">Рубльбанк онлайн</Link>
          </div>
        </div>
      </div>
      <div className={style.nav_main}>
        <div className={style.container}>
          <Link to="/Mortgage">Ипотека</Link>
          <Link to="/Credit">Кредиты</Link>
          <Link to="/Contributions">Вклады</Link>
          <Link to="/Cards">Карты</Link>
          <Link to="/Investments">Инвестиции</Link>
          <Link to="/Translations">Переводы</Link>
          <Link to="/Insurance">Страхование</Link>
          <Link to="/Refinancing">Рефинансирование</Link>
          <Link to="/Services">Сервисы</Link>
        </div>
      </div>
    </div>
  );
};
