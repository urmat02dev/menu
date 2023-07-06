import React from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import "./FoodPage.scss"
import {BsBasket3Fill} from "react-icons/bs";

const FoodPage = ({el}) => {
    const {t } = useTranslation()
    const nav = useNavigate()
    const {id} = useParams()
    const {basket} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const foundProduct = basket.some(e => e.id === el.id)
    const getTitle = (el) => {
        if (lang === "en"){
            return el.name_en
        }
        else if (lang === "ru"){
            return el.name_ru
        }
        else if (lang === "kg"){
            return el.name_kg
        }
    }
    function getDesc(el) {
        if (lang === "en"){
            return el.description_en.slice(0,20)
        }
        else if (lang === "ru"){
            return el.description_ru.slice(0,20)
        }
        else if (lang === "kg"){
            return el.description_kg.slice(0,20)
        }
    }
    const dispatch = useDispatch()
    function getWindow (el) {
                if (!foundProduct){
                    dispatch({type:MODAL,payload:true}) && dispatch({type: GET_DETAIL,payload:el})
                }
                else {
                    nav(`/${id}/basket`)
                }
        }

    function getBasket (el) {
        let basket = JSON.parse(localStorage.getItem("backend")) || []
        let found = basket.find(e => e.id === el.id)
        if (found){
            basket = basket.map(e => e.id === el.id ? {...e,quantity: e.quantity + 1}: e)
        }else {
            basket = [...basket, {...el,quantity: 1}]
        }
        localStorage.setItem("backend",JSON.stringify(basket))
        dispatch({type:GET_BASKET, payload: el})
    }

    return (
        <div className="foods--one" key={el.id}>
            <img src={el.image} alt="" onClick={() =>  getWindow(el)}/>
            <h3>{getTitle(el)}</h3>
            <p>{getDesc(el)}</p>
            <div className='foods--one__basket'>
                <h3>{el.price}c</h3>
                {
                    foundProduct ?
                        <div onClick={() => nav(`/${id}/basket`)} className="foods--one__basket--icon"><BsBasket3Fill/></div>
                        :<div className="foods--one__basket--icon" onClick={() => getBasket(el)}>
                        <BiBasket className='icon'/>
                        </div>
                }

            </div>
        </div>
    );
};

export default FoodPage;