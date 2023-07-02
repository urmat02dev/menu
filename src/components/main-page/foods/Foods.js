import React, {useEffect} from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import FoodCard from "./FoodCard";
import {useSelector} from "react-redux";


const Foods = ({active,setActive,modal,setModal}) => {
  const {t} = useTranslation()
  const {foods,burgerMenu} = useSelector(state => state)
  const getTitle = () => {
  if (active === 1){
    return t('category.foods.one')
}
  else if (active === 2){
    return t('category.foods.two')
  }
  else if (active === 3){
    return t('category.foods.three')
  }
  else if (active === 4){
    return t('category.foods.four')
  }
  else if (active === 5){
    return t('category.foods.five')
  }
  else if (active === 6){
    return t('category.foods.six')
  }
  else if (active === 7){
    return t('category.foods.seven')
  }
  else if (active === 8){
    return t('category.foods.eight')
  }
  else if (active === 9){
    return t('category.salads.one')
  }
  else if (active === 10){
    return t('category.salads.two')
  }
  else if (active === 11){
    return t('category.salads.three')
  }
  else if (active === 12){
    return t('category.drinks.one')
  }
  else if (active === 13){
    return t('category.drinks.two')
  }
  else if (active === 14){
    return t('category.5')
  }
  else if (active === 15){
    return t('category.6')
  }
  else if (active === 16){
    return t('category.7')
  }
  else if (active === 17){
    return t('category.8')
  }
  else if (active === 18){
    return t('category.9')
  }
  else if (active === 19){
    return t('category.10')
  } else if (active === 20){
    return t('category.11')
  }

  }
  const WindowClick = () => {
    window.scroll({top:400, behavior:"smooth"})
  }
  const rolls = foods.filter(el => el.category_name === "Роллы")
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
  console.log("Check",!burgerMenu && active === 1)
useEffect(() => {
  WindowClick()
},[WindowClick])

  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>{getTitle()}</h1>
            {
              (!burgerMenu && active === 1)  ?
                  WindowClick &&
                  firstMeal.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              })
            : false
            }
          {
            (!burgerMenu && active === 2) ? WindowClick &&
                generalDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 3) ? WindowClick &&
                secondCoursesOfChicken.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 4) ? WindowClick &&
                secondCoursesOfBeef.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 5) ? WindowClick &&
                secondCoursesOfLamb.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 6) ? WindowClick &&
                secondCoursesOfFish.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 7) ? WindowClick &&
                banquetDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 8) ? WindowClick &&
                lambDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
           }
          {
            (!burgerMenu && active === 9) ? WindowClick &&
                saladsMayonnaise.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 10) ? WindowClick &&
                saladsVegetableOil.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 11) ? WindowClick &&
                spicySalads.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 12) ? WindowClick &&
                hotDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 13) ? WindowClick &&
                coldDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 14) ? WindowClick &&
                childrensMenu.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 15) ? WindowClick &&
                flour.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 16) ? WindowClick &&
                sideDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 17) ? WindowClick &&
                kebabs.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 18) ? WindowClick &&
                rolls.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 20) ? WindowClick &&
                coldSnacks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                                   modal={modal}
                                   setModal={setModal}
                  />
                })
                : false
          }
        </div>
      </div>
    </div>
  );
};

export default Foods;