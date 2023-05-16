import React, {useEffect, useState} from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_BASKET, GET_DETAIL, GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import "./FoodPage.scss"
import basket from "../../basket/Basket";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";
import axios from "axios";

const FoodPage = ({el}) => {
    const {t } = useTranslation()
    const nav = useNavigate()
    const {basket,cardId} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const foundProduct = basket.some(e => e.id === el.id)
    const [back , setBack] = useState([])
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
        }

    async function getBasket (el) {
        dispatch({type:GET_BASKET,payload:el})
        const url = await axios.post("https://aitenir.pythonanywhere.com/api/cart-item/",
            {
            "quantity":el.quantity,
            "dish":el.id,
            "cart":cardId
        })
        console.log(url)
        console.log(cardId)
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
                        <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/></div>
                        :<div className="foods--one__basket--icon" onClick={() => getBasket(el)}>
                        <BiBasket className='icon'/>
                        </div>
                }

            </div>
        </div>
    );
};

export default FoodPage;