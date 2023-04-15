import React, {useState} from 'react';
import "./FoodsSlider.scss"
import {BiBasket} from "react-icons/bi";
import Slider from "react-slick";
import {data} from "../../fake-backend/backend";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
import FoodPage from "./FoodPage";
const FoodsSlider = ({modal,setModal}) => {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
        ]
    };


  return (
    <div id='foods'>
      <div className="container">
          <h2>Хит продаж</h2>
        <div className="foods">
            <Slider {...settings}>
                {
                    data[0].map((el) => {
                        return <FoodPage el={el}
                                         modal={modal}
                                         setModal={setModal}/>
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default FoodsSlider;