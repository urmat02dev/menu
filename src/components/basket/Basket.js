import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import { useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
import {useTranslation} from "react-i18next";
import BasketCard from "./BasketCard";
import {useDispatch, useSelector} from "react-redux";
import { parametr} from "../starts/random";
import {CASH, HERE, TERMINAL, WITH} from "../../redux/Reducer/ActionTypes";
import BurgerMenu from "../header/BurgerMenu";
const Basket = () => {

  const nav = useNavigate()
  let item = []
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {basket,params} = useSelector(s => s)
  const {here,withT,terminal,cash,order,pay} = useSelector(s => s)
  const [loader, setLoader] = useState(false)
  const [btn,setBtn] = useState(false)
  const [cash2, setCash2]  = useState(false)

  function getHere() {
    dispatch({type:HERE,payload:!here}) && dispatch({type:WITH,payload:false})
  }
  function getS() {
    dispatch({type:WITH,payload:!withT}) && dispatch({type:HERE,payload:false})
  }
  function getCash() {
    dispatch({type:CASH,payload:!cash}) && dispatch({type:TERMINAL,payload:false})
  }
  function getTerm() {
    dispatch({type:TERMINAL,payload:!terminal}) && dispatch({type:CASH,payload:false})
  }

  const getModal = async () => {
    if ((here || withT)  && (cash || terminal) ) {
      return nav(`/${params}/main/print`)
    }
    else {
      setTimeout(() => {
        setBtn(false)
      },2000)
    }
  }

  const total = basket.reduce((acc,e) => {
    return acc + e.price * e.quantity
  },0)
  useEffect(() => {
    dispatch({type:HERE,payload:false})
    dispatch({type:WITH,payload:false})
    dispatch({type:CASH,payload:false})
    dispatch({type:TERMINAL,payload:false})

  },[basket.length])

  return basket.length ?
    <>
      <Header/>
      <BurgerMenu/>
      <div id={"basket"}>
        <div className="container">
          <h2 className={"title"}>{t("basket.h1")}</h2>
          <div className="basket">
            {
              basket.map(el => (<BasketCard el={el} key={el.id}/>))
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
                <div onClick={() => getHere()}  className={ here ? "basket--status__general--here active" :"basket--status__general--here"}>
                  <h2>{t("basket.here")}</h2>
                </div>
                <div className={'signal'}></div>
                <div onClick={() => getS()}  className={ withT ? "basket--status__general--with active" :"basket--status__general--with"}>
                  <h2>{t("basket.with")}</h2>
                </div>
              </div>

            </div>
            <div className='basket--pay'>
              <div className='basket--pay__text'>
                <h1>{t("basket.pay")}</h1>
              </div>
              <div className='basket--pay__block'>
                <div className={cash ? "basket--pay__block--cash active" : "basket--pay__block--cash"} onClick={getCash} >
                  <div style={{background: cash ? "white" : ""}}  className='basket--pay__block--cash__radus'></div>
                  <h2 onClick={() => setCash2(!cash2)}>{t("basket.cash")}</h2>
                </div>
                <div className={terminal ? "basket--pay__block--terminal active" : "basket--pay__block--terminal" } onClick={getTerm}>
                  <div style={{background: terminal ? "white" : ""}}  className='basket--pay__block--terminal__radus'></div>
                  <h2>{t("basket.term")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--btn' onClick={() =>getModal() } style={{

            }}>
                <button onClick={() => setBtn(true)} style={{
                  background: btn ? (!here || !withT) || (!cash || !terminal)  ? "red" : "#004FC7" : "#004FC7"
                }}>{t("basket.cont")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
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
          <div className={"btn"} onClick={() => nav(`/${params}/main`) }>
            <button>{t("basket.btn")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;