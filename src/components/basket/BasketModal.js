
import React, {useEffect, useState} from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BACKEND_GET_URL, ids, param, ran} from "../starts/random";
import {useDispatch, useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";
import axios from "axios";
import {AiOutlineCheck, AiOutlineCloseCircle} from "react-icons/ai";
import {EMPTY_BASKET, GET_BASKET} from "../../redux/Reducer/ActionTypes";
const BasketModal = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const {id} = useParams()
    const dispatch = useDispatch()
    const {check,basket} = useSelector(state => state)
    const {here,withT,terminal,cash} = useSelector(s => s)
    const [items, setItems] = useState([])
    const [seconds, setSeconds] = useState(30);
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
        if(seconds > 0 ){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
            nav(`/${id}/basket`)
        }

    }
    const getSpeed = async () => {
            nav(`/${id}/main/`)
            const data = {
                table: id,
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
            await axios.post(`${BACKEND_GET_URL}api/orders`,data)
                .then(res => console.log(res.data)).catch(err => console.log(err))
            return dispatch({type:EMPTY_BASKET, payload:items})
                && localStorage.setItem("backend",JSON.stringify(items))
        }
    const getBackend = async () => {
        if (seconds  === -2){
            nav(`/${id}/main/`)
            await axios.post(`${BACKEND_GET_URL}/api/orders`,{
                table: id,
                is_takeaway:here ? 0 : 1,
                payment:cash ? 0 : 1 ,
                items: basket.map   ((el) => {
                    return {
                        "additives": el.add ?  el.add.map(item => item.id) : [],
                        "dish": el.id,
                        "quantity": el.quantity,

                    }

                },)
            })
                .then(res => console.log(res.data)).catch(err => console.log(err))
            return dispatch({type:EMPTY_BASKET, payload:items})
                && localStorage.setItem("backend",JSON.stringify(items))
        }
    }

    const total = basket.reduce((acc,e) => {
        return acc + e.price * e.quantity
    },0)
    const data = {
        table: id,
        is_takeaway:here ? 0 : 1,
        payment:cash ? 0 : 1 ,
        items: basket.map   ((el) => {
            return {
                "additives": el.add ?  el.add.map(item => item.id) : [],
                "dish": el.id,
                "quantity": el.quantity,

            }

        })
    }
    console.log("DATA",data)

    useEffect(() => {
        window.scroll({top:50, behavior:"smooth"})
        getBackend()
        const timeout = setTimeout(() => {
            setSeconds(seconds - 1);
        }, 1000);

        return () => {
            clearTimeout(seconds === -1);
        };

    }, [seconds]);


    return (
        <section id={"modalBasket"}>
            <div className={'container'}>
                 <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
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
                            <div className={"change"} style={{
                                background:seconds  < 1 ? "red" : ""
                            }} onClick={() => getNav()}><FaPencilAlt className={'icon11'}/>{t("order.change")}</div>
                            <span className={"change"} onClick={() => getSpeed()}><AiOutlineCheck className={'icon11'}/> {t("basket.cont")}</span>
                        </div>
                        <div className={"seconds"}>
                            {
                                seconds > 0 && <div>{seconds > 0 ? seconds+"s" : ""}</div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BasketModal;