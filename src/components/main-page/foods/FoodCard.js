import React from 'react';
import {BsBasket3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./FoodCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, MODAL} from "../../../redux/Reducer/ActionTypes";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BiBasket} from "react-icons/bi";
import {NavLink, useNavigate} from "react-router-dom";

const FoodCard = ({el, setModal, modal}) => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const {basket} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const getTitle = (el) => {
        if (lang === "en") {
            return el.title
        } else if (lang === "ru") {
            return el.title_ru
        } else if (lang === "kg") {
            return el.title_kg
        }
    }

    function getDesc(el) {
        if (lang === "en") {
            return el.desc.slice(0, 200)
        } else if (lang === "ru") {
            return el.desc_ru.slice(0, 200)
        } else if (lang === "kg") {
            return el.desc_kg.slice(0, 200)
        }
    }

    function getWindow() {
        setModal(!modal)
    }
    function getBasket(el) {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = [...basket, {...el}]
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:GET_BASKET,payload:el})
    }
    
    const foundProduct = basket.some(e => e.id === el.id)
    return (el.id ?
            <div id='food'>
                <div className="food--card" onClick={() =>  getWindow()}>
                    <div className={"img"}>
                        <NavLink to={`/detail/${el.id}`}>
                            <img className="food--card__img" src={el.image} alt=""  />
                        </NavLink>


                    </div>
                    <div className="food--card__word">
                        <h2>{getTitle(el)}</h2>
                        <p>{getDesc(el)}</p>
                        <div className="food--card__word--order">
                            <h4>{el.price}c.</h4>
                            {
                                foundProduct ? <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/></div>
                                    :<div className="foods--one__basket--icon" onClick={() => getBasket(el)}>
                                        <BiBasket className='icon'/></div>
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