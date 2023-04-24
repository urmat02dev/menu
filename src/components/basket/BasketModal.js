import React from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";

const BasketModal = () => {
    const nav = useNavigate()
    return (
        <div id={"modalBasket"}>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <img src={print} alt=""/>
                        <h1>Ваш заказ принят!</h1>
                        <div onClick={() => nav("/main")} className={"modalBasket--block__close"}>
                            <p>&times;</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasketModal;