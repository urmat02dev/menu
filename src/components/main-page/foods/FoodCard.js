import React from 'react';
import {BsBasket3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./FoodCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

const FoodCard = ({el}) => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const {basket, modal} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const getTitle = (el) => {
        if (lang === "en") {
            return el.name_en
        } else if (lang === "ru") {
            return el.name_ru
        } else if (lang === "kg") {
            return el.name_kg
        }
    }

    function getDesc(el) {
        if (lang === "en") {
            return el.description_en.slice(0,80)
        } else if (lang === "ru") {
            return el.description_ru.slice(0,80)
        } else if (lang === "kg") {
            return el.description_kg.slice(0,80)
        }
    }

    function getWindow(el) {
            dispatch({type: MODAL, payload: true}) && dispatch({type: GET_DETAIL, payload: el})
    }

     function getBasket(el) {
        dispatch({type: GET_BASKET, payload: el})
     }

    function getNav() {
        dispatch({type: MODAL, payload: false})
        nav("/basket")
    }


    return (el.id ?
            <div id='food'>
                <div className="food--card" onClick={() => getWindow(el)}>
                    <div className={"img"}>
                        <img className="food--card__img" src={el.image} alt=""/>
                    </div>
                    <div className="food--card__word">
                        <h2>{getTitle(el)}</h2>
                        <p>{getDesc(el)}</p>
                        <div className="food--card__word--order">
                            <h4>{el.price}c.</h4>
                                    <div className="food--card__word--order__blockZ" onClick={() => getWindow(el)}>
                                        <BiBasket className='icon2'/>
                                    </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>


            </div>
            : <div>error</div>

    );

};

export default FoodCard;