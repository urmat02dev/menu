import React from 'react';
import {BsBasket3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./FoodCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {BiBasket} from "react-icons/bi";
import { useNavigate} from "react-router-dom";

const FoodCard = ({el}) => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const {basket} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const found = basket.some(e => e.id === el.id)
    const getTitle = (el) => {
        if (lang === "en") {
            return el.title
        } else if (lang === "ru") {
            return el.title_ru
        } else if (lang === "kg") {
            return el.title_kg
        }
    }

    function getDesc(el) {
        if (lang === "en") {
            return el.desc.slice(0, 200)
        } else if (lang === "ru") {
            return el.desc_ru.slice(0, 200)
        } else if (lang === "kg") {
            return el.desc_kg.slice(0, 200)
        }
    }

    function getWindow(el) {
        if (!found){
            dispatch({type:MODAL,payload:true}) && dispatch({type: GET_DETAIL,payload:el})
        }
    }
    function getBasket(el) {
            dispatch({type:GET_BASKET,payload:el}) && dispatch({type:MODAL,payload:false})

    }
    function getNav() {
        dispatch({type:MODAL,payload:false})
        nav("/basket")
    }


    return (el.id ?
            <div id='food'>
                    <div className="food--card">
                        <div className={"img"} onClick={() =>  getWindow(el)}>
                                <img className="food--card__img" src={el.image} alt=""/>
                        </div>
                        <div className="food--card__word" onClick={() => getWindow(el)}>
                            <h2>{getTitle(el)}</h2>
                            <p>{getDesc(el)}</p>
                            <div className="food--card__word--order">
                                <h4>{el.price}c.</h4>

                            </div>
                            <div>
                            </div>
                        </div>
                    </div>

                    {
                        found  ?
                            <div onClick={() => getNav()} className="blockZ">
                                <BsBasket3Fill className={"icon1"}/>
                            </div>
                            :
                            <div className="blockZ" onClick={() => getBasket(el)}>
                                <BiBasket className='icon2'/>
                            </div>
                    }

            </div>
            : <div>error</div>

    );

};

export default FoodCard;