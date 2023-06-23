import React from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import {data} from "../../fake-backend/backend";
import FoodCard from "./FoodCard";
import {useSelector} from "react-redux";


const Foods = ({active,setActive,modal,setModal}) => {
  const {t} = useTranslation()
  const {foods} = useSelector(state => state)
  const getTitle = () => {
  if (active === 0 || active === 1){
    return t('category.2')
}
  else if (active === 2){
    return t('category.3')
  }
  else if (active === 3){
    return t('category.4')
  }
  else if (active === 4){
    return t('category.5')
  }
  else if (active === 5){
    return t('category.6')
  }
  else if (active === 6){
    return t('category.7')
  }
  else if (active === 7){
    return t('category.8')
  }

  }
  const rolls = foods.filter(el => el.category_name === "Роллы")
  // const rollsSet = foods.filter(el => el.category_name === "Salads")
  const coldSnacks = foods.filter(el => el.category_name === "Холодные закуски")
  const saladsMayonnaise = foods.filter(el => el.category_name === "Салаты с майонезом")
  const saladsVegetableOil = foods.filter(el => el.category_name === "Салаты с растительным маслом")
  const spicySalads = foods.filter(el => el.category_name === "Острые салаты (с соевым соусом)")
  const firstMeal = foods.filter(el => el.category_name === "Первые блюда")
  const secondCoursesOfChicken = foods.filter(el => el.category_name === "Вторые блюда из курицы")
  const secondCoursesOfBeef = foods.filter(el => el.category_name === "Вторые блюда из говядины")
  const secondCoursesOfFish = foods.filter(el => el.category_name === "Вторые блюда из рыбы")
  const secondCoursesOfLamb = foods.filter(el => el.category_name === "Вторые блюда из баранины")
  const generalDishes = foods.filter(el => el.category_name === "Общие блюда")
  const banquetDishes = foods.filter(el => el.category_name === "Банкетные блюда")
  const lambDishes = foods.filter(el => el.category_name === "Блюда из баранины на заказ")
  const kebabs = foods.filter(el => el.category_name === "Шашлыки")
  const childrensMenu = foods.filter(el => el.category_name === "Детское меню")
  const sideDishes = foods.filter(el => el.category_name === "Гарниры")
  const hotDrinks = foods.filter(el => el.category_name === "Горячие напитки")
  const coldDrinks = foods.filter(el => el.category_name === "Холдные")
  const flour = foods.filter(el => el.category_name === "Мучные")
  console.log("FLour", coldDrinks)

  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>{getTitle()}</h1>

            {
              active === 0 || active === 1 ?
                  coldDrinks.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              })
                : ""
            }

        </div>
      </div>
    </div>
  );
};

export default Foods;