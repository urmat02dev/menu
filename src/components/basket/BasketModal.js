import React from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import as from "./../../assets/img/Rectangle 4.svg"
const BasketModal = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    return (
        <section onClick={() => nav("/main")} id={"modalBasket"}>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
                            <div onClick={() => nav("/main")} className={"modalBasket--block__ich--close"}>
                                <p>&times;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BasketModal;