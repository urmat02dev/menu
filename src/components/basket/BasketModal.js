
import React, {useState} from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ids, ran} from "../starts/random";
import {useSelector} from "react-redux";
const BasketModal = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const {check} = useSelector(state => state)
    console.log(check)
    return (
        <section onClick={() => nav(`/1/main`)} id={"modalBasket"}>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
                            <div onClick={() => nav(`/1/main/`)} className={"modalBasket--block__ich--close"}>
                                <p>&times;</p>
                            </div>

                            <div className={"check"}>
                            <div className={"check--total"}>
                                <h1>Итого:{check.total_price}</h1>
                                <p>Стол№{check.table}</p>
                                <h3>Время:{check.time_created}</h3>
                                <h4>Оплата:{check.payment === 0 && "cash" || check.payment === 1 && "term" }</h4>
                                {
                                    check.items.map(el => (
                                        <div key={el.id}>
                                            <h1>{el.dish}</h1>
                                            <p>{el.quantity}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BasketModal;