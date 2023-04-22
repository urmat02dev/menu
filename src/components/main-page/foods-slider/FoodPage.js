import React from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_BASKET, GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./FoodPage.scss"

const FoodPage = ({el,modal,setModal}) => {
    const {t } = useTranslation()
    const nav = useNavigate()
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
        function getWindow() {
            setModal(!modal)
            dispatch({type:MODAL,payload:el})
        }
    function getBasket() {
        dispatch({type:GET_BASKET,payload:el})
    }

    console.log(modal)
    return (
        <div className="foods--one">
            <img src={el.image} alt="" onClick={() =>  getWindow(modal) }/>
            <h3>{getTitle(el)}</h3>
            <p>{getDesc(el)}</p>
            <div className='foods--one__basket'>
                <h3>{el.price}c</h3>
                <div className="foods--one__basket--icon" onClick={() => getBasket()}>
                    <BiBasket className='icon'/>
                </div>

            </div>
        </div>
    );
};

export default FoodPage;