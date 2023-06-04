import React from 'react';
import "./Modal.scss"
import {
    ADD, ADD_DELETE,
    MODAL,
    MODAL_MINUS,
    MODAL_PLUS,
    MODAL_TO_BASKET, MODAL_TO_PRICE,
} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useTranslation} from "react-i18next";


const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {basket,add} = useSelector(state => state)
    const found = basket.some(e => e.id === el.id)
    const lang = localStorage.getItem("i18nextLng")
    const {t} = useTranslation()
    const getAdd = (a) => {
        dispatch({type:ADD,payload:a})
    }
    const getBasket = (el) => {
        if (add.length){
            let item= []
            dispatch({type: MODAL_TO_PRICE, payload: el})
            dispatch({type:ADD_DELETE,payload:item})
        }
        else {
            let item= []
            let basket = JSON.parse(localStorage.getItem("backend")) || []
            basket = [...basket, {...el, quantity: el.quantity, price:el.price}]
            localStorage.setItem("backend", JSON.stringify(basket))
            dispatch({type: MODAL_TO_BASKET, payload: el})
            dispatch({type:ADD_DELETE,payload:item})
        }


    }
    const getMinus = (el) => {
        dispatch({type: MODAL_MINUS, payload: el})
    }
    const getPlus = (el) => {
        dispatch({type: MODAL_PLUS, payload: el})
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
    const getAddTitle = (el) => {
        if (lang === "en") {
            return  `(${el.name_en})`
        } else if (lang === "ru") {
            return `(${el.name_ru})`
        } else if (lang === "kg") {
            return `(${el.name_kg})`
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

    const total = add.reduce((acc,e) => {return acc + e.price},0)
    const title =  add.map(el => getAddTitle(el))
    return (
        <>

            <div className={"modal--img"} >
                <img src={el.image} alt=""/>
            </div>
                <div className="modal--desc--add">{
                    add ? <p className={"title"}>{getTitle(el)}  <span className={"added"}>{title.length ? "+" : ""} {title}</span> </p>
                        : <p className={"title"}>{getTitle(el)}</p>
                }
                </div>
                <div className="modal--desc">
                    <h2 className="modal--desc__h2">{getTitle(el)}</h2>
                    <h3 className='modal--desc__h3'>{getDesc(el)}</h3>
                    <div className="modal--desc__price">
                        <h4>{el.gram}г.</h4>
                        <h5>Цена:<span>{el.price}c</span></h5>
                    </div>
                <h3 className='modal--desc__h3'>{getDesc(el)}</h3>
                <div className="modal--desc__price">
                    <h5>Цена:<span>{add.length ? total + el.price * el.quantity : el.price * el.quantity}c</span></h5>
                    <h4>{el.gram}г.</h4>
                </div>
            </div>
            <div className="modal--additives">
            {
                el.available_additives &&
                el.available_additives.map(a => (
                    <div key={a.id}>
                            {
                                <button key={a.id}
                                           className={add && add.some(el => el.id === a.id) ? "added" : "add"}
                                           onClick={() => getAdd(a)}>
                                {getTitle(a)}
                            </button>


                            }

                    </div>
                ))
            }
            </div>
            <div className="modal--basket">
                {
                    found ?
                        <div className="basket"
                             onClick={() => nav("/basket") || dispatch({type: MODAL, payload: false})}>
                            <h1 className='basket--were'>{t("detail.to_basket")}</h1>
                            <div className="icon-block">
                                <div className="foods--one__basket--icon"><BsBasket3Fill className='icon'/></div>
                            </div>
                        </div>
                        :
                        <div className="basket" onClick={() => getBasket(el)}>
                            <h1 className='basket--were'>{t("detail.add")}</h1>
                            <div className="icon-block">
                                <div className="foods--one__basket--icon">
                                    <BiBasket className='icon'/></div>
                            </div>
                        </div>
                }
                <div className="count">
                    <span style={{}}
                          onClick={() => getMinus(el)}><AiOutlineMinus className={"ico"} style={{
                        color: `${el.quantity > 1 ? "" : "rgba(10,10,10,0.39)"}`
                    }}/></span>
                    <p>{el.quantity}</p>
                    <span onClick={() => getPlus(el)}><AiOutlinePlus className={"ico"}/></span>
                </div>
            </div>
        </>
    );
};

export default ModalCard;