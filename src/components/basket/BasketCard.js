import React from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
const BasketCard = ({el}) => {
  const lang = localStorage.getItem("i18nextLng")
  const dispatch = useDispatch()
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
      return el.desc.slice(0,200)
    }
    else if (lang === "ru"){
      return el.desc_ru.slice(0,200)
    }
    else if (lang === "kg"){
      return el.desc_kg.slice(0,200)
    }
  }
  function getMinus(el) {
    dispatch({type:MINUS,payload:el})
  }
  function getPlus(el) {
    dispatch({type:PLUS, payload:el})


  }

  return (
    <div className="basket--card">
      <img className="basket--card__img" src={el.image} alt=""/>
      <div className="basket--card__word">
        <div className={"desc"}>
          <h2>{getTitle(el)}</h2>
          <div className="close">
            <IoMdClose className={"icon"}/>
          </div>
        </div>
        <p>{el.mass}г.</p>
        <div className="basket--card__word--order">
          <div className={"price"}>
            <h4>{el.price}c.</h4>
          </div>
          <div className={"count"}>
            <span onClick={() => getMinus()}><AiOutlineMinus/></span>
            <p>{el.quantity}</p>
            <span onClick={() => getPlus()}> <AiOutlinePlus/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;