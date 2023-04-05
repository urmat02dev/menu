import React, {useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import {useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
const Basket = () => {
  const [basket , setBasket] = useState(false)
  const nav = useNavigate()
  return basket ? (
    <>
      <Header/>
      <div id={"basket"}>
        <div className="container">
          <h2 className={"title"}>Корзина</h2>
          <div className="basket">

          </div>
        </div>
      </div>
      true
    </>
  )
    : (
    <>
    <Header/>

      <div id={"basket"}>
        <div className="container">
          <h2 className={"title"} >Корзина</h2>
          <div className="no-basket">
            <div className={"block"}>
              <img src={group} alt=""/>
              <h1>УПС... Тут пусто</h1>
              <p>Вы еще ничего не добавили</p>
            </div>

          </div>
          <div className={"btn"} onClick={() => nav("/main") }>
            <button>Открыть меню</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;