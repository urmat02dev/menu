import React, {useState} from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ids} from "../starts/random";
import {useSelector} from "react-redux";
const BasketModal = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const {check} = useSelector(state => state)
    console.log(check)
    return (
        <section onClick={() => nav(`/${ids}/`)} id={"modalBasket"}>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
                            <div onClick={() => nav(`/${ids}/`)} className={"modalBasket--block__ich--close"}>
                                <p>&times;</p>
                            </div>

                            <div className={"check"}>
                            <div className={"check--total"}>
                                <h1>Итого:</h1>
                                <h1>{check.total_price}</h1>
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