import React from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_BASKET, GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import "./FoodPage.scss"
import basket from "../../basket/Basket";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";

const FoodPage = ({el}) => {
    const {t } = useTranslation()
    const nav = useNavigate()
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const {modal} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const getTitle = (el) => {
        if (lang === "en"){
            return el.title
        }
        else if (lang === "ru"){
            return el.title_ru
        }
        else if (lang === "kg"){
            return el.title_kg
        }
    }
    function getDesc(el) {
        if (lang === "en"){
            return el.desc.slice(0,50)
        }
        else if (lang === "ru"){
            return el.desc_ru.slice(0,50)
        }
        else if (lang === "kg"){
            return el.desc_kg.slice(0,50)
        }
    }
    const dispatch = useDispatch()
         function getWindow () {
            dispatch({type:MODAL,payload:true})
        }



    console.log(modal)
    function getBasket(el) {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = [...basket, {...el}]
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:GET_BASKET,payload:el})
    }
    const foundProduct = basket.length ?  basket.some(e => e.id === el.id) : false
    return (
        <div className="foods--one" >
            <NavLink to={`/detail/${el.id}`}>
                <img src={el.image} alt="" onClick={() =>  getWindow()}/>
            </NavLink>
            <h3>{getTitle(el)}</h3>
            <p>{getDesc(el)}</p>
            <div className='foods--one__basket'>
                <h3>{el.price}c</h3>
                {
                    foundProduct ? <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/></div>   :<div className="foods--one__basket--icon" onClick={() => getBasket(el)}>
                        <BiBasket className='icon'/></div>
                }

            </div>
        </div>
    );
};

export default FoodPage;