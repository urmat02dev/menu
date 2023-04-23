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
  const [status,setStatus] = useState(0)
  const [pay,setPay] = useState(0)
  const getStatus = () => {

  }
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
                <h2>{t("basket.sum")}:</h2>
                <h1>{total}{t("basket.s")}</h1>
              </div>
            </div>
            <div className='basket--status'>
              <div className='basket--status__title'>
                <h1>{t("basket.status")}</h1>
              </div>
              <div className='basket--status__general'>
                <div onClick={() => setStatus(1)}  className={status === 1 ? "basket--status__general--here active" :"basket--status__general--here"}>
                  <h2>{t("basket.here")}</h2>
                </div>
                <div onClick={() => setStatus(2)}  className={status === 2 ? "basket--status__general--with active" :"basket--status__general--with"}>
                  <h2>{t("basket.with")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--pay'>
              <div className='basket--pay__text'>
                <h1>{t("basket.pay")}</h1>
              </div>
              <div className='basket--pay__block'>
                <div className={pay === 1 ? "basket--pay__block--cash active" : "basket--pay__block--cash"} >
                  <input type="radio" name={"status"} onClick={() => setPay(1)}/>
                  <h2>{t("basket.cash")}</h2>
                </div>
                <div className={pay === 2 ? "basket--pay__block--terminal active" : "basket--pay__block--terminal" }>
                  <input type="radio" name={"status"} onClick={() => setPay(2)}/>
                  <h2>{t("basket.term")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--btn'>
              <button>{t("basket.cont")}</button>
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