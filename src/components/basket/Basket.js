import React, {useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import {useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import FoodCard from "../main-page/foods/FoodCard";
import BasketCard from "./BasketCard";
const Basket = () => {
  const [basket , setBasket] = useState(false)
  const nav = useNavigate()
  const {t} = useTranslation()
  const basketP = useSelector(s => s.basket)
  console.log(basketP)
  return basketP.length ? (
    <>
      <Header/>
      <div id={"basket"}>
        <div className="container">
          <h2 className={"title"}>{t("basket.h1")}</h2>
          <div className="basket">
            {
              basketP.map(el => <BasketCard el={el}/>)
            }
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
          <h2 className={"title"} >{t("basket.h1")}</h2>
          <div className="no-basket">
            <div className={"block"}>
              <img src={group} alt=""/>
              <h1>{t("basket.ups")}</h1>
              <p>{t("basket.p")}</p>
            </div>

          </div>
          <div className={"btn"} onClick={() => nav("/main") }>
            <button>{t("basket.btn")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;