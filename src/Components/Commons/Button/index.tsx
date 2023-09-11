import React from "react";
import style from "./Button.module.scss";

type TButtonTitle = {
  title: string;
};

export const Button = ({ title }: TButtonTitle) => {
  return (
    <div>
      <button className={style.btn}>{title}</button>
    </div>
  );
};
