import React from 'react';
import "./FoodsSlider.scss"
import logo from '../../../assets/img/Rectangle 44.png'
import {BiBasket} from "react-icons/bi";
import Slider from "react-slick";
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
                    infinite: true,
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
  return (
    <div id='foods'>
      <div className="container">
          <h2>Хит продаж</h2>
        <div className="foods">
            <Slider {...settings}>
                <div className="foods--one">
                    <img src={logo} alt=""/>
                    <h3>Панкейк</h3>
                    <p>Мука, молоко, банан, сахарная пудра,смородина</p>
                    <div className='foods--one__basket'>
                        <h3>150c</h3>
                        <BiBasket className='foods--one__basket--icon'/>
                    </div>
                </div>
                <div className="foods--one">
                    <img src={logo} alt=""/>
                    <h3>Панкейк</h3>
                    <p>Мука, молоко, банан, сахарная пудра,смородина</p>
                    <div className='foods--one__basket'>
                        <h3>150c</h3>
                        <BiBasket className='foods--one__basket--icon'/>
                    </div>
                </div>
                <div className="foods--one">
                    <img src={logo} alt=""/>
                    <h3>Панкейк</h3>
                    <p>Мука, молоко, банан, сахарная пудра,смородина</p>
                    <div className='foods--one__basket'>
                        <h3>150c</h3>
                        <BiBasket className='foods--one__basket--icon'/>
                    </div>
                </div>
                <div className="foods--one">
                    <img src={logo} alt=""/>
                    <h3>Панкейк</h3>
                    <p>Мука, молоко, банан, сахарная пудра,смородина</p>
                    <div className='foods--one__basket'>
                        <h3>150c</h3>
                        <BiBasket className='foods--one__basket--icon'/>
                    </div>
                </div>
                <div className="foods--one">
                    <img src={logo} alt=""/>
                    <h3>Панкейк</h3>
                    <p>Мука, молоко, банан, сахарная пудра,смородина</p>
                    <div className='foods--one__basket'>
                        <h3>150c</h3>
                        <BiBasket className='foods--one__basket--icon'/>
                    </div>
                </div>
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default FoodsSlider;