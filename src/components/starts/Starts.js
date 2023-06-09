import React, {useEffect, useState} from 'react';
import Slider from "react-slick"
import "./Starts.scss"
import start1 from "../../assets/img/start1.png"
import start2 from "../../assets/img/start2.png"
import start3 from "../../assets/img/start3.png"
import {useNavigate, useParams} from "react-router-dom";
import {parametr} from "./random";
import {useDispatch, useSelector} from "react-redux";
import {GET_PARAMS} from "../../redux/Reducer/ActionTypes";
const Starts = () => {
  const nav = useNavigate()
  const {params} = useSelector(state => state)
  const dispatch = useDispatch()
  const {id} = useParams()
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
  useEffect(() => {
    dispatch({type:GET_PARAMS, payload:id})
  },[])
  console.log("Id",id)


  return (
    <div id={"start"}  onClick={() => nav(`/${id}/main`)}>
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
          <div className={"btn"} onClick={() => nav(`/${id}/main/`) }>
            <button  >Открыть меню</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starts;