import React, {useEffect, useState} from 'react';
import Slider from "react-slick"
import "./Starts.scss"
import start1 from "../../assets/img/start1.png"
import start2 from "../../assets/img/start2.png"
import start3 from "../../assets/img/start3.png"
import {useNavigate} from "react-router-dom";
import {ids, ran} from "./random";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {CARD_ID, GET_BASKET} from "../../redux/Reducer/ActionTypes";

const Starts = () => {
  const nav = useNavigate()

  const dispatch = useDispatch()
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    scroll:true,
    autoplaySpeed: 1000,
    cssEase: "ease",
  };
  const {cardId} = useSelector(state => state)
  async function getCreateTable () {
    const url = await axios.post("https://aitenir.pythonanywhere.com/api/carts/",{
      "table": ran
    })
    dispatch({type:CARD_ID,payload:url.data.id})
    nav(`/${ids}/main`)
    console.log(url)
  }

  console.log(cardId)
  return (
    <div id={"start"} onClick={() => getCreateTable()}>
      <div className="container">
        <div className="start">
          <div className="slider">
            <Slider {...settings} >
              <div className={"item"}>
                <img src={start1} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
                <div className={"lines"}>
                  <div className="line one"></div>
                  <div className="two"></div>
                  <div className="three"></div>
                </div>
              </div>
              <div className={"item"}>
                <img src={start2} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
                <div className={"lines"}>
                  <div className="one line"></div>
                  <div className="two line"></div>
                  <div className="three"></div>
              </div>
              </div>
              <div className={"item"}>
                <img src={start3} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
                <div className={"lines"}>
                  <div className="one line"></div>
                  <div className="two line"></div>
                  <div className="three line"></div>
              </div>
              </div>
            </Slider>
          </div>
          <div className={"btn"} onClick={() => nav(`/main/${ran}`) }>
            <button  >Открыть меню</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starts;