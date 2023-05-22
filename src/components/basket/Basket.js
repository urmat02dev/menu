import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import Header from "../header/Header";
import {Link, useNavigate} from "react-router-dom";
import group from "../../assets/img/Group.svg"
import {useTranslation} from "react-i18next";
import BasketCard from "./BasketCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {GET_BASKET, GET_CHECK} from "../../redux/Reducer/ActionTypes";
import {ids} from "../starts/random";
import Loader from "../loader/Loader";
const Basket = () => {

  const nav = useNavigate()
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {basket} = useSelector(s => s)
  console.log("Basket",basket)
  const basketID = basket.map(el => el.id)
  console.log(basketID)
  const [loader, setLoader] = useState(false)
  const [here,setHere] = useState(false)
  const [s,setS] = useState(false)
  const [order,setOrder] = useState(false)
  const [pay,setPay] = useState(false)
  const [cash,setCash] = useState(false)
  const [tern,setTern] = useState(false)
  const [btn,setBtn] = useState(false)
  const [cash2, setCash2]  = useState(false)

  function getHere() {
    setHere(!here) || setS(false)
    if (!here){
      setOrder(true)
    }
    else setOrder(false)
  }
  function getS() {
    setS(!s) || setHere(false)
    if (!s){
      setOrder(true)
    }
    else setOrder(false)
  }
  function getCash() {
    setCash(!cash) || setTern(false)
    if (!cash){
      setPay(true)
    }
    else setPay(false)
  }
  function getTerm() {
    setTern(!tern) || setCash(false)
    if (!tern){
      setPay(true)
    }
    else setPay(false)
  }
  const getModal = async (el) => {
    if (order && pay) {
      const url = await axios.post(`https://aitenir.pythonanywhere.com/api/orders`,{
        table: ids,
        is_takeaway:1,
        payment: 1,
        items: basket.map((el) => {
          return {
            "dish": el.id,
            "quantity": el.quantity

          }
        })

      })
      console.log(url)
      dispatch({type:GET_CHECK,payload:url.data})
      return basket.splice(0, basket.length) && nav(`/${ids}/main/print`)
    }
    else if (order === false && pay === false){
      setTimeout(() => {
        setBtn(false)
      },2000)
    }
  }


  const total = basket.reduce((acc,e) => {
    return acc + e.price * e.quantity
  },0)
  useEffect(() => {
  },[])

  return basket.length ?
    <>
      <Header/>
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
                <div onClick={() => getS()}  className={ s ? "basket--status__general--with active" :"basket--status__general--with"}>
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
                <div className={tern ? "basket--pay__block--terminal active" : "basket--pay__block--terminal" } onClick={getTerm}>
                  <div style={{background: tern ? "white" : ""}}  className='basket--pay__block--terminal__radus'></div>
                  <h2>{t("basket.term")}</h2>
                </div>
              </div>
            </div>
            <div className='basket--btn' onClick={() => getModal()} style={{

            }}>
                <button onClick={() => setBtn(true)} style={{
                  background: btn ? !order || !pay  ? "red" : "#004FC7" : "#004FC7"
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
          <div className={"btn"} onClick={() => nav("/main") }>
            <button>{t("basket.btn")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;