
import React, {useEffect, useState} from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ids, parametr, ran} from "../starts/random";
import {useDispatch, useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";
import axios from "axios";
import {AiOutlineCheck, AiOutlineCloseCircle} from "react-icons/ai";
import {EMPTY_BASKET, GET_BASKET} from "../../redux/Reducer/ActionTypes";
const BasketModal = ({here,tern,cash,s}) => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {check,basket,add} = useSelector(state => state)
    const [items, setItems] = useState([])
    const lang = localStorage.getItem("i18nextLng")
    const getTitle = (el) => {
        if (lang === "en") {
            return el.name_en
        } else if (lang === "ru") {
            return el.name_ru
        } else if (lang === "kg") {
            return el.name_kg
        }
    }
    const getNav = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      nav("/basket")

    }
    const getSpeed = async () => {
        nav(`/${parametr}/main/`)
        const data = {
            table: parametr,
            is_takeaway:here ? 0 : 1,
            payment:cash ? 0 : 1 ,
            items: basket.map((el) => {
                return {
                    "additives": el.add ?  el.add.map(item => item.id) : [],
                    "dish": el.id,
                    "quantity": el.quantity,

                }

            },)

        }
           await axios.post(`https://aitenir.pythonanywhere.com/api/orders`,data)
            .then(res => console.log(res.data)).catch(err => console.log(err))
        return dispatch({type:EMPTY_BASKET, payload:items})
            && localStorage.setItem("backend",JSON.stringify(items))
    }




    const getClose = () => {
        nav(`/basket/`)
    }
    const total = basket.reduce((acc,e) => {
        return acc + e.price * e.quantity
    },0)

    return (
        <section id={"modalBasket"}>
            <div className={'container'}>
                 <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
                            <div onClick={() => getClose()} className={"modalBasket--block__ich--close"}>
                                <AiOutlineCloseCircle/>
                            </div>
                            <div>
                                {
                                    basket.map(el => (
                                        <div key={el.id}>
                                            <div className={'zak'}>{getTitle(el)}
                                                <div className={'syz'}></div><span>{el.quantity * el.price}{t("basket.s")}</span> </div>

                                        </div>

                                    ))
                                }
                                <div className={'zakk'}>{t("basket.sum")} <div className='syzz'></div>{total}{t("basket.s")}</div>
                            </div>
                        </div>
                        <div className={"check"}>
                            <span className={"change"} onClick={() => getNav()}><FaPencilAlt className={'icon11'}/>{t("order.change")}</span>
                            <span className={"change"} onClick={() => getSpeed()}><AiOutlineCheck className={'icon11'}/> {t("basket.cont")}</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BasketModal;