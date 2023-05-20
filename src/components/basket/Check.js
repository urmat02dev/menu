import React from 'react';
import "./Check.scss"
import print from "../../assets/img/Vector.svg";
import {useNavigate} from "react-router-dom";
import {ids} from "../starts/random";
import {useTranslation} from "react-i18next";
const Check = () => {
    const nav = useNavigate()
    const {t} = useTranslation()

    return (

        <section onClick={() => nav(`/${ids}/main`)} id={"modalBasket"}>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Check;