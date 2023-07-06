import React, {useRef} from 'react';
import {BsBasket3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./FoodCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {BiBasket} from "react-icons/bi";
import {useNavigate, useParams} from "react-router-dom";

const FoodCard = ({el}) => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const {id} = useParams()
    const {basket, modal} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const foundProduct = basket.some(e => e.id === el.id)

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
            return <p>{el.description_en.slice(0,20)}</p>
        } else if (lang === "ru") {
            return <p>{el.description_ru.slice(0,20)}</p>
        } else if (lang === "kg") {
            return  <p>{el.description_kg.slice(0,20)}</p>
        }
    }

    function getWindow(el) {
        if (foundProduct){
            dispatch({type: MODAL, payload: false})
            nav(`/${id}/basket`)
        }
        else dispatch({type: MODAL, payload: true}) && dispatch({type: GET_DETAIL, payload: el})
    }

     function getBasket(el) {
        dispatch({type: GET_BASKET, payload: el})
     }

    const scroolRef = useRef(null)


    return (el.id ?
            <div id='food' key={el.id} >
                <div className="food--card" onClick={() => getWindow(el)}>
                    <div className={"img"}>
                        <img className="food--card__img" src={el.image} alt=""/>
                    </div>
                    <div className="food--card__word">
                        <h2>{getTitle(el)}</h2>
                        {getDesc(el)}
                        <div className="food--card__word--order">
                            <h4>{el.price}c.</h4>
                            {
                                foundProduct ? <div className="food--card__word--order__blockZ" onClick={() => getWindow(el)}>
                                    <BsBasket3Fill className='icon2'/>
                                </div> : <div className="food--card__word--order__blockZ" onClick={() => getWindow(el)}>
                                    <BiBasket className='icon2'/>
                                </div>
                            }

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