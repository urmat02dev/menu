import React, {useEffect} from 'react';
import "./FoodsSlider.scss"
import Slider from "react-slick";
import FoodPage from "./FoodPage";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
const FoodsSlider = ({modal,setModal,best}) => {
    const {t} = useTranslation()
    const {foods} = useSelector(state => state)
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  
               }

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
                breakpoint: 376,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
        ]
    };
    const bests = foods.filter(el => el.category_name === "Bestseller")

  return (
    <div id='foods' style={{
        display:best ? "flex" : "none"
    }}>
      <div className="container">
          <h2>{t('category.1')}</h2>
        <div className="foods">
            <Slider {...settings}>
                {
                    bests.map((el) => {
                        return <FoodPage el={el}
                                         key={el.id}
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