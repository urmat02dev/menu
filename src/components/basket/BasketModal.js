
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
                                <h5>Ваш чек</h5>
                                <h3>Дата:{check.time_created}</h3>
                                <h1>Итого:{check.total_price}c.</h1>
                                <p>Стол №{check.table}</p>

                                <h4>Оплата:{check.payment === 0 ? "Наличный"  : "" || check.payment === 1 ? "Терминал" : ""}</h4>
                                <h4>Заказ статуса:{check.is_takeaway === 0 ? "Здесь" : "" || check.payment === 1 ?  "С собой" : "" }</h4>
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