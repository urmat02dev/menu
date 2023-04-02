import React from 'react';
import "./Category.scss"
import xit from '../../../assets/img/Vector.png'
import xit1 from '../../../assets/img/Vector.svg'
import xit2 from '../../../assets/img/1.svg'
import xit3 from '../../../assets/img/2.svg'
import xit4 from '../../../assets/img/3.svg'
import xit5 from '../../../assets/img/4.svg'
import xit6 from '../../../assets/img/5.svg'
import xit7 from '../../../assets/img/6.svg'
import Slider from "react-slick";
const Category = () => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
        }
      },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 3,
                infinite: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1   ,
                infinite: false,
            }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
    ]
  };
  return (
    <div id='category'>
        <div className="container">
          <Slider {...settings} >
              <div className="category-one1">
                <img src={xit} alt=""/>
                <h3>Хит продаж</h3>
              </div>
              <div className="category-one2">
                <img src={xit1} alt=""/>
                <h3>Завтраки</h3>
              </div>
              <div className="category-one2">
                <img src={xit2} alt=""/>
                <h3>Салаты</h3>
              </div>
              <div className="category-one3">
                <img src={xit3} alt=""/>
                <h3>блюда</h3>
              </div>
              <div className="category-one4">
                <img src={xit4} alt=""/>
                <h3>Пицца</h3>
              </div>
              <div className="category-one2">
                <img src={xit5} alt=""/>
                <h3>Десерты</h3>
              </div>
              <div className="category-one5">
                <img src={xit6} alt=""/>
                <h3>Напитки</h3>
              </div>
              <div className="category-one6">
                <img src={xit7} alt=""/>
                <h3>Горячие напитки</h3>
              </div>
          </Slider>
        </div>
    </div>
  );
};

export default Category;