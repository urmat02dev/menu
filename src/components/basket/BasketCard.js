import React, {useEffect, useState} from 'react';
import "./BasketCard.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {DELETE, GET_BASKET, MINUS} from "../../redux/Reducer/ActionTypes";

const BasketCard = ({el}) => {
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const {add} = useSelector(state => state)
    const [loader, setLoader] = useState(false)
    const {t} = useTranslation()
    const handleIncrement = () => {
        let basket = JSON.parse(localStorage.getItem("backend")) || []
        let found = basket.find(e => e.id === el.id)
        if (found) {
            basket = basket.map(e => e.id === el.id ? {...e, quantity: e.quantity + 1} : e)
        } else {
            basket = [...basket, {...el, quantity: 1}]
        }
        localStorage.setItem("backend", JSON.stringify(basket))
        dispatch({type: GET_BASKET, payload: el})
    }
    const handleDecrement = () => {
        let basket = JSON.parse(localStorage.getItem("backend")) || []
        basket = basket.map(e => {
            if (e.id === el.id) {
                if (e.quantity > 1) {
                    return {...e, quantity: e.quantity - 1}
                } else return e
            } else return e
        })
        localStorage.setItem("backend", JSON.stringify(basket))
        dispatch({type: MINUS, payload: el})
    }
    const getTitle = (food) => {
        if (lang === "en") {
            return food.name_en
        } else if (lang === "ru") {
            return food.name_ru
        } else if (lang === "kg") {
            return food.name_kg
        }
    }
    const getAddTitle = (el) => {
        if (lang === "en") {
            return `(${el.name_en})`
        } else if (lang === "ru") {
            return `(${el.name_ru})`
        } else if (lang === "kg") {
            return `(${el.name_kg})`
        }
    }

    const [del, setDel] = useState(false)
    const getDelete = () => {
        let basket = JSON.parse(localStorage.getItem("backend")) || []
        basket = basket.filter(e => e.id !== el.id)
        localStorage.setItem("backend", JSON.stringify(basket))
        dispatch({type: DELETE, payload: el})
    }
    const getGram = (el) => {
        if (el.gram * el.quantity >= 1000){
            if (el.category_name === "Горячие напитки" ||  el.category_name === "Холдные"){
                return (el.gram / 1000) * el.quantity + "л"
            }
            else return (el.gram /1000) * el.quantity  + "кг"
        }
        else if (el.gram === ""){
            return ""
        }
        else return  el.gram * el.quantity + "г"
    }


    const title = el.add && el.add.map(el => getAddTitle(el))

    console.log("GRAN",el.add)
    return (

        <div className="basket--card" key={el.id}>
            <img className="basket--card__img" src={el.image} alt=""/>
            <div className="basket--card__word">
                <div className={"desc"}>
                    <div className="basket--desc--add">
                            <div className={"basket--desc--add--title"}>
                                <p className={"name"}>{getTitle(el)}</p>
                                <p className={"gramm"}>{getGram(el)}</p>
                            </div>
                    </div>
                    <div className="close" onClick={() => {
                        getDelete()
                    }}>
                        <IoMdClose className={"icon"}/>
                    </div>
                </div>

                <div className="basket--card__word--order">
                    <div className={"price"}>
                        <h4>{el.price * el.quantity}{t("basket.s")}</h4>
                    </div>

                    <div className={"count"}>
                        <span style={{color: `${el.quantity > 1 ? "" : "#FFFFFF80"}`}}
                              onClick={handleDecrement}><AiOutlineMinus/></span>
                        <span className={'quantity'}>{el.quantity}</span>
                        <span onClick={handleIncrement}> <AiOutlinePlus/></span>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BasketCard;