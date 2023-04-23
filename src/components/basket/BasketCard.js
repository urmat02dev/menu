import React, {useState} from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {DELETE, GET_BASKET, MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
const BasketCard = ({el}) => {
  const lang = localStorage.getItem("i18nextLng")
  // const basket = JSON.parse(localStorage.getItem("basket"))
  const basket = useSelector(state => state.basket)
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

  const  addPlus = () => {
    dispatch({type:GET_BASKET, payload: el})

  }
  const [del, setDel] = useState(false)
  const getDelete = () => {
    dispatch({type: DELETE, payload: el})
    setDel(!del)
  }
  console.log("Del", del)





  return (
    <div className="basket--card" style={{
      translateY: del ? '-400px' : ''
    }}>
      <img className="basket--card__img" src={el.image} alt=""/>
      <div className="basket--card__word">
        <div className={"desc"}>
          <h2>{getTitle(el)}</h2>
          <div className="close">
            <IoMdClose onClick={() => getDelete()} className={"icon"}/>
          </div>
        </div>
        <p>{el.mass}г.</p>
        <div className="basket--card__word--order">
          <div className={"price"}>
            <h4>{el.price * el.quantity}c.</h4>
          </div>
          <div className={"count"}>
            <span style={{color:`${el.quantity > 1 ? "" : " rgba(255, 255, 255, 0.11)" }`}} onClick={() => dispatch({type: MINUS,payload:el})}><AiOutlineMinus/></span>
            <p>{el.quantity}</p>
            <span onClick={() => addPlus(el)}> <AiOutlinePlus/></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BasketCard;