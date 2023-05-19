

import React, {useState} from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {DELETE, GET_BASKET, MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
import {useTranslation} from "react-i18next";
const BasketCard = ({el}) => {
  const lang = localStorage.getItem("i18nextLng")
  const dispatch = useDispatch()
  const {t} = useTranslation()

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

  const  addPlus = (el) => {
    dispatch({type:GET_BASKET, payload: el})
  }
  const [del, setDel] = useState(false)
  const getDelete = (el) => {
    dispatch({type: DELETE, payload: el})
    setDel(!del)
  }
  const minusDelete = (el) =>{
    dispatch({type: MINUS, payload: el})
  }

  return (
    <div className="basket--card" key={el.id} style={{
      translateY: del ? '-400px' : ''
    }}>
      <img className="basket--card__img" src={el.image} alt=""/>
      <div className="basket--card__word">
        <div className={"desc"}>
          <h2>{getTitle(el)}</h2>
          <div className="close">
            <IoMdClose onClick={() => getDelete(el)} className={"icon"}/>
          </div>
        </div>
        <p>{el.gram}г.</p>
        <div className="basket--card__word--order">

          <div className={"price"}>
            <h4>{el.price * el.quantity}{t("basket.s")}.</h4>
          </div>

          <div className={"count"}>
            <span style={{color:`${el.quantity > 1 ? "" : "#FFFFFF80" }`}} onClick={() => minusDelete(el)}><AiOutlineMinus/></span>
            <p>{el.quantity}</p>
            <span onClick={() => addPlus(el)}> <AiOutlinePlus/></span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BasketCard;