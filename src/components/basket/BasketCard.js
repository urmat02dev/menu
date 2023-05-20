import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import axios from "axios";

const BasketCard = ({el}) => {
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const {cardId} = useSelector(state => state)
    const [loader, setLoader] = useState(false)
    const {t} = useTranslation()
    const handleIncrement = () =>{

    }
    const handleDecrement = () =>{

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

    const [del, setDel] = useState(false)
    const getDelete = (el) => {
        setDel(!del)
    }


    return (

            <div className="basket--card" key={el.id} style={{translateY: del ? '-400px' : ''}}>
            <img className="basket--card__img" src={el.image} alt=""/>
            <div className="basket--card__word">
                <div className={"desc"}>
                    <h2>{getTitle(el)}</h2>
                    <div className="close" onClick={() => {

                    }}>
                        <IoMdClose onClick={() => getDelete(el)} className={"icon"}/>
                    </div>
                </div>
                <p>{el.gram}г.</p>
                <div className="basket--card__word--order">

                    <div className={"price"}>
                        <h4>{el.price * el.quantity}{t("basket.s")}.</h4>
                    </div>

                    <div className={"count"}>
                        <span style={{color: `${el.quantity > 1 ? "" : "#FFFFFF80"}`}}
                              onClick={handleDecrement}><AiOutlineMinus/></span>
                        <p>{el.quantity}</p>
                        <span onClick={handleIncrement}> <AiOutlinePlus/></span>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BasketCard;