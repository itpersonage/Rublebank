import React from "react";
import style from './DebetCardItem.module.scss';

type TdebetCardItem = {
    h1:string,
    p: string,
    img: string,
    alt:string
}

export const DebetCardItem = ({h1, p, img, alt}: TdebetCardItem) => {
    return (
        <div className={style.debet_card_item}>
            <img src={img} alt={alt} />
            <div className={style.debet_card_item_text}>
                
            </div>
        </div>
    )
}