import React from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

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
            return el.desc
        }
        else if (lang === "ru"){
            return el.desc_ru
        }
        else if (lang === "kg"){
            return el.desc_kg
        }
    }
    const dispatch = useDispatch()
        function getWindow() {
            setModal(!modal)
            dispatch({type:MODAL,payload:el})
        }


    return (
        <div className="foods--one">
            <img src={el.image} alt="" onClick={() =>  getWindow() }/>
            <h3>{getTitle(el)}</h3>
            <p>{getDesc(el)}</p>
            <div className='foods--one__basket'>
                <h3>{el.price}c</h3>
                <BiBasket className='foods--one__basket--icon'/>
            </div>
        </div>
    );
};

export default FoodPage;