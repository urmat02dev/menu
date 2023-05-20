import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {DELETE, GET_BASKET, MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
import {useTranslation} from "react-i18next";
import axios from "axios";
import Loader from "../loader/Loader";

const BasketCard = ({el}) => {
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const {cardId} = useSelector(state => state)
    const [loader, setLoader] = useState(false)
    const {t} = useTranslation()
    const food = el.dish

    const getTitle = (food) => {
        if (lang === "en") {
            return food.name_en
        } else if (lang === "ru") {
            return food.name_ru
        } else if (lang === "kg") {
            return food.name_kg
        }
    }

    const changeCount = async (el, quantity,action) => {
        setLoader(true)
        if ( el.quantity > 1) {
           const url =  await axios.post(`https://aitenir.pythonanywhere.com/api/carts/${cardId}/${action}/`,
                {
                    "quantity": quantity,
                    "dish": el.dish.id,
                })
            dispatch({type:GET_BASKET, payload:url.data.items})
            setLoader(false)
            console.log(url)
            console.log(cardId)
        }
    }

    const [del, setDel] = useState(false)
    const getDelete = (el) => {
        setDel(!del)
    }

    const getImg = (food) => {
        if (food.image.startsWith("h")) {
            return food.image
        } else if (food.image.startsWith("/m")) {
            return `https://aitenir.pythonanywhere.com/${food.image}`
        }
    }


    useEffect(() => {
        changeCount()
    }, [])

    console.log(cardId)
    return (

            <div className="basket--card" key={el.id} style={{translateY: del ? '-400px' : ''}}>
            <img className="basket--card__img" src={getImg(food)} alt=""/>
            <div className="basket--card__word">
                <div className={"desc"}>
                    <h2>{getTitle(food)}</h2>
                    <div className="close" onClick={() => {
                        changeCount(el,1,"remove_from_cart")
                    }}>
                        <IoMdClose onClick={() => getDelete(el)} className={"icon"}/>
                    </div>
                </div>
                <p>{food.gram}г.</p>
                <div className="basket--card__word--order">

                    <div className={"price"}>
                        <h4>{food.price * el.quantity}{t("basket.s")}.</h4>
                    </div>

                    <div className={"count"}>
                        <span style={{color: `${el.quantity > 1 ? "" : "#FFFFFF80"}`}}
                              onClick={() => changeCount(el, -1,"add_to_cart")}><AiOutlineMinus/></span>
                        <p>{el.quantity}</p>
                        <span onClick={() => changeCount(el, 1,"add_to_cart")}> <AiOutlinePlus/></span>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BasketCard;