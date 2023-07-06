import React, {useEffect} from 'react';
import {BsBasket3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./Card.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {parametr} from "../../starts/random";

const Card = ({el}) => {
    const {t} = useTranslation()
    const {basket} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const found = basket.some(e => e.id === el.id)
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
            return <p>{el.description_en.length >20 ? <p>{el.description_en.slice(0,el.description_en.length/2)} <br/>{el.description_en.slice(el.description_en.length/2, el.description_en.length)}
            </p> : <p>{el.description_en}</p> }
            </p>
        } else if (lang === "ru") {
            return <p>{el.description_ru.length >20 ? <p>{el.description_ru.slice(0,el.description_ru.length/2)} <br/>{el.description_ru.slice(el.description_ru.length/2, el.description_ru.length)}
            </p> : <p>{el.description_ru}</p> }
            </p>
        } else if (lang === "kg") {
            return <p>{el.description_kg.length >20 ? <p>{el.description_kg.slice(0,el.description_kg.length/2)} <br/>{el.description_kg.slice(el.description_kg.length/2, el.description_kg.length)}
            </p> : <p>{el.description_kg}</p> }
            </p>
        }
    }

    function getWindow(el) {
            dispatch({type: MODAL, payload: true}) && dispatch({type: GET_DETAIL, payload: el})

    }




    return (el.id ?
            <div id='card' key={el.id}>
                <div className="card--card">
                    <div className={"img"} onClick={() => getWindow(el)}>
                        <img className="card--card__img" src={el.image} alt=""/>
                    </div>
                    <div className="card--card__word" onClick={() => getWindow(el)}>
                        <h2>{getTitle(el)}</h2>
                        <div style={{width:"200px" , fontSize:"10px"}}>{getDesc(el)}</div>
                        <div className="card--card__word--order">
                            <h4>{el.price}c.</h4>
                            <div className="card--card__word--order__icon1" onClick={() => getWindow(el)}>
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

export default Card;