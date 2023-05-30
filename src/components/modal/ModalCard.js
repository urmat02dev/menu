import React, {useState} from 'react';
import "./Modal.scss"
import {
    MODAL,
    MODAL_MINUS,
    MODAL_PLUS,
    MODAL_TO_BASKET,
} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import modal from "./Modal";
import {useTranslation} from "react-i18next";

const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {basket, foods} = useSelector(state => state)
    const found  = basket.some(e => e.id === el.id)
    const lang = localStorage.getItem("i18nextLng")
    const {t} = useTranslation()
    const [adding,setAdding] = useState(false)
    const foundAdd = el.available_additives.some(el => el.id)
    const getAdd = (add) => {
        setAdding(!adding)
    }
    const  getBasket = (el) => {
        let basket = JSON.parse(localStorage.getItem("backend"))|| []
        basket = [...basket, {...el,quantity: el.quantity}]
        localStorage.setItem("backend",JSON.stringify(basket))
        dispatch({type:MODAL_TO_BASKET, payload: el})
    }
    const getMinus = (el) =>{
        dispatch({type: MODAL_MINUS, payload: el})
    }
    const  getPlus = (el) => {
        dispatch({type:MODAL_PLUS,payload:el})
    }
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
            return el.description_en
        } else if (lang === "ru") {
            return el.description_ru
        } else if (lang === "kg") {
            return el.description_kg
        }
    }
    // let element1 = foods.available_additivesel[1];

    console.log( el.id)

    return (
        <>

                <div className={"modal--img"}>
                    <img src={el.image} alt=""/>
                </div>
                <div className="modal--desc">
                    <h2 className="modal--desc__h2">{getTitle(el)}</h2>
                    <h3 className='modal--desc__h3'>{getDesc(el)}</h3>
                    <div className="modal--desc__price">
                        <h5>Цена:<span>{el.price}c</span></h5>
                        <h4>{el.gram}г.</h4>
                    </div>
                </div>
                <div className="modal--additives">
                        {
                            el.available_additives ?
                            el.available_additives.map(el => (
                                        <button key={el.id} className={ el.id  ? "added" : "add"} onClick={(add) => getAdd(add)}>
                                        {getTitle(el)}
                                    </button>)) : ""
                        }
                </div>
                <div className="modal--basket">
                    {
                        found ?
                            <div className="basket"
                                 onClick={() => nav("/basket") || dispatch({type:MODAL, payload:false})}>
                                <h1 className='basket--were'>{t("detail.to_basket")}</h1>
                                <div className="icon-block" >
                                    <div  className="foods--one__basket--icon"><BsBasket3Fill className='icon'/></div>
                                </div>
                            </div>
                            :
                            <div className="basket" onClick={() => getBasket(el)}>
                                <h1 className='basket--were'>{t("detail.add")}</h1>
                                <div className="icon-block" >
                                    <div className="foods--one__basket--icon" >
                                        <BiBasket className='icon'/></div>
                                </div>
                            </div>
                    }
                    <div className="count">
                    <span style={{

                    }}
                          onClick={() => getMinus(el)}><AiOutlineMinus className={"ico"} style={{
                        color:`${el.quantity > 1 ? "" : "rgba(10,10,10,0.39)" }`
                    }}/></span>
                        <p>{el.quantity}</p>
                        <span onClick={() => getPlus(el)}><AiOutlinePlus className={"ico"}/></span>
                    </div>
                </div>
        </>
    );
};

export default ModalCard;