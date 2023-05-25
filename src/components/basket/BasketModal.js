
import React, {useEffect, useState} from 'react';
import print from "../../assets/img/Vector.svg"
import "./BasketModal.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ids, parametr, ran} from "../starts/random";
import {useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";
import axios from "axios";
import {AiOutlineCheck} from "react-icons/ai";
const BasketModal = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const {check,basket} = useSelector(state => state)
    const getNav = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      nav("/basket")

    }
    const getPost = async () => {
        setTimeout(async () => {
            nav(`/1/main/`)
            const url = await axios.post(`https://aitenir.pythonanywhere.com/api/orders`,{
                table: parametr,
                is_takeaway:1,
                payment:0 ,
                items: basket.map((el) => {
                    return {
                        "dish": el.id,
                        "quantity": el.quantity
                    }
                })
            })
            console.log(url)
            return basket.splice(0,basket.length)
        },30000000)


    }
    const getSpeed = async () => {
        nav(`/1/main/`)
        const url = await axios.post(`https://aitenir.pythonanywhere.com/api/orders`,{
            table: parametr,
            is_takeaway:1,
            payment:0 ,
            items: basket.map((el) => {
                return {
                    "dish": el.id,
                    "quantity": el.quantity
                }
            })
        })
        console.log(url)
        return basket.splice(0,basket.length)
    }
    useEffect(() => {
        getPost()
    },[])
    return (
        <section id={"modalBasket"}>
            <img src="https://foodddy.ru/post/tiser/3851c3620e9ed1e4dc258d1ab02475da.jpg"  alt="" style={{
                position:"relative",
                left:"0",
                top:"0",
                width:"100%",
                height:"100vh",
            }}/>
            <div className={'container'}>
                <div className={"modalBasket"}>
                    <div className={"modalBasket--block"}>
                        <div className={'modalBasket--block__ich'}>
                            <img src={print} alt=""/>
                            <h1>{t("order.zak")}</h1>
                            <div onClick={() => nav(`/1/main/`)} className={"modalBasket--block__ich--close"}>
                                <AiOutlineCheck/>
                            </div>
                            <div>
                                {
                                    basket.map(el => (
                                        <div><p>{el.name_ru}</p></div>
                                    ))
                                }
                            </div>

                            <div className={"check"}>
                                <span className={"change"} onClick={() => getNav()}><FaPencilAlt/> Изменить</span>
                                <span className={"change"} onClick={() => getSpeed()}><AiOutlineCheck/> {t("basket.cont")}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BasketModal;