import React, {useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import {useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
import {useTranslation} from "react-i18next";
import BasketCard from "./BasketCard";
import {useSelector} from "react-redux";
const Basket = () => {
  const nav = useNavigate()
  const {t} = useTranslation()
  const {basket} = useSelector(s => s)
  const total = basket.reduce((acc,e) => {
    return acc + e.price * e.quantity
  },0)
  return basket.length ? (
    <>
      <Header/>
      <div id={"basket"}>
        <div className="container">
          <h2 className={"title"}>{t("basket.h1")}</h2>
          <div className="basket">
            {
              basket.map(el => <BasketCard el={el} />)
            }
            <div>
              <div className="basket--total">
                <h2>Сумма заказа:</h2>
                <h1>{total}c</h1>
              </div>
            </div>


          </div>
        </div>
      </div>
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