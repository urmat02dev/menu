import React, {useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import {Link, useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
import {useTranslation} from "react-i18next";
import BasketCard from "./BasketCard";
import {useSelector} from "react-redux";
import BasketModal from "./BasketModal";
const Basket = () => {
  const nav = useNavigate()
  const {t} = useTranslation()
  const {basket} = useSelector(s => s)
  let basketLocal = JSON.parse(localStorage.getItem("basket")) || []
  const [here,setHere] = useState(false)
  const [s,setS] = useState(false)
  const [cash,setCash] = useState(false)
  const [tern,setTern] = useState(false)
  const [btn,setBtn] = useState(false)
  const getModal = () => {
    if (btn){
      if (here || s || cash || tern){
        return  <BasketModal/> && nav("/main/print")
        setBtn(true)
        }
      else return setBtn(false)
      }
    }

  const total = basketLocal.reduce((acc,e) => {
    return acc + e.price * e.quantity
  },0)
  console.log(btn)
  return basketLocal.length ? (
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
              <div  className='basket--status__general'>
                <div style={{background: btn === true ? "red" : ""}} onClick={() => setHere(!here) || setS(false)}  className={ here ? "basket--status__general--here active" :"basket--status__general--here"}>
                  <h2>{t("basket.here")}</h2>
                </div>
                <div onClick={() => setS(!s) || setHere(false)}  className={ s ? "basket--status__general--with active" :"basket--status__general--with"}>
                  <h2>{t("basket.with")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--pay'>
              <div className='basket--pay__text'>
                <h1>{t("basket.pay")}</h1>
              </div>
              <div className='basket--pay__block'>
                <div className={cash ? "basket--pay__block--cash active" : "basket--pay__block--cash"} >
                  <input type="radio" name={"status"} onClick={() => setCash(!cash) || setTern(false)}/>
                  <h2>{t("basket.cash")}</h2>
                </div>
                <div className={tern ? "basket--pay__block--terminal active" : "basket--pay__block--terminal" }>
                  <input type="radio" name={"status"} onClick={() => setTern(!tern) || setCash(false)}/>
                  <h2>{t("basket.term")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--btn' onClick={() => getModal()}>
                <button onClick={() => setBtn(true)}>{t("basket.cont")}</button>
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