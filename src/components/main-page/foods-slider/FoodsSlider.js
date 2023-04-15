import React, {useState} from 'react';
import "./FoodsSlider.scss"
import {BiBasket} from "react-icons/bi";
import Slider from "react-slick";
import {data} from "../../fake-backend/backend";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {GET_MODAL, MODAL} from "../../../redux/Reducer/ActionTypes";
const FoodsSlider = () => {
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
                    infinite: true,
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
    const dispatch = useDispatch()
    const getModal = (el) => {
        dispatch({type:GET_MODAL, payload:true})
        dispatch({type:MODAL, payload:el})
    }
  return (
    <div id='foods'>
      <div className="container">
          <h2>Хит продаж</h2>
        <div className="foods">
            <Slider {...settings}>
                {
                    data[0].map((el) => {
                        return <div className="foods--one" key={el.id}>
                            <div onClick={() => getModal(el)}>
                                <img src={el.image} alt=""/>
                            </div>
                            <h3>{el.title}</h3>
                            <p>{el.desc}</p>
                            <div className='foods--one__basket'>
                                <h3>{el.price}</h3>
                                <BiBasket className='foods--one__basket--icon'/>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default FoodsSlider;