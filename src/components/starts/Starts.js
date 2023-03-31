import React from 'react';
import Slider from "react-slick"
import "./Starts.scss"
import start1 from "../../assets/img/start1.png"
import start2 from "../../assets/img/start2.png"
import start3 from "../../assets/img/start3.png"
import {useNavigate} from "react-router-dom";
const Starts = () => {
  const nav = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 500,
          autoplaySpeed: 1000,
          cssEase: "linear",
        }
      },
      ]
  };
  return (
    <div id={"start"} onClick={() => nav("/main")}>
      <div className="container">
        <div className="start">
          <div className="slider">
            <Slider {...settings} >
              <div className={"item"}>
                <img src={start1} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
              </div>
              <div className={"item"}>
                <img src={start2} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
              </div>
              <div className={"item"}>
                <img src={start3} alt=""/>
                <h1>Новые вкусы</h1>
                <p>Попробуй прямо сейчас</p>
              </div>

            </Slider>
          </div>
          <div className={"btn"} onClick={() => nav("/main") }>
            <button>Открыть меню</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starts;