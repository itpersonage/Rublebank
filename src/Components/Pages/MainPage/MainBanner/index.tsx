import React from "react";
import style from "./MainBanner.module.scss";
import { Link } from "react-router-dom";

export const MainBanner = () => {
  return (
    <div className={style.main_banner}>
      <div className={style.container}>
        <div className={style.main_banner_left}>
          <h1>
            Кредит <br /> <span>на любые</span> цели
          </h1>
          <div className={style.main_banner_btn}>
            <Link to='/GetLoan'><button>Получить кредит</button></Link>
            <Link to='/More'><button>Подробнее</button></Link>
          </div>
        </div>
        <img src="/images/MainBanner.jpg" alt="MainBanner" />
      </div>
    </div>
  );
};
