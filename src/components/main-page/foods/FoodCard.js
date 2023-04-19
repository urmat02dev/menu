import React from 'react';
import {BsBasket} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import "./FoodCard.scss"

const FoodCard = ({el}) => {
  const {t } = useTranslation()
  const lang = localStorage.getItem("i18nextLng")
  const getTitle = (el) => {
    if (lang === "en"){
      return el.title
    }
    else if (lang === "ru"){
      return el.title_ru
    }
    else if (lang === "kg"){
      return el.title_kg
    }
  }
  function getDesc(el) {
    if (lang === "en"){
      return el.desc.slice(0,200)
    }
    else if (lang === "ru"){
      return el.desc_ru.slice(0,200)
    }
    else if (lang === "kg"){
      return el.desc_kg.slice(0,200)
    }
  }
  return (
<center>
  <div className="food--card">
    <div className={"img"}>
      <img className="food--card__img" src={el.image} alt=""/>

    </div>
    <div className="food--card__word">
      <h2>{getTitle(el)}</h2>
      <p>{getDesc(el)}</p>
      <div className="food--card__word--order">
        <h4>{el.price}c.</h4>
        <div className="food--card__word--order__icon1">
          <BsBasket className="icon"/>
        </div>

      </div>
    </div>
  </div>
</center>

  );
};

export default FoodCard;