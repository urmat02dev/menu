import React from 'react';
import "./Modal.scss"
import {BsBasket} from "react-icons/bs";
import meal from "../../assets/img/iPhone 13/image 15.png"

const Modal = ({active, setActive}) => {
    return (
        <div id="modal">
            <div className="container">
                <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                    <div className="modal--content" onClick={e => e.stopPropagation()}>
                        <button className="modal--content__none" onClick={() => setActive(false)}>&#x2715;</button>
                        <img className="modal--content__img1" src={meal} alt=""/>
                        <div className="modal--content__card" >
                            <h1>Гранола</h1>
                            <p>Гранола Карамелизированная хрустящая смесь полезных злаков, греческий йогурт, свежие
                                фрукты и
                                ягоды</p>
                            <i>250г</i>
                            <div className="modal--content__card--price">
                                <h4>Цена:</h4>
                                <i>238c</i>
                            </div>
                            <div className="modal--content__card--btn">
                                <button className="modal--content__card--btn__addBtn">Добавить в<BsBasket
                                    className="modal--content__card--btn__addBtn--icon"/></button>
                                <button className="modal--content__card--btn__plusBtn">-  1  +</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;