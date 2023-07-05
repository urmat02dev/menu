import React, {useEffect, useRef, useState} from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import FoodCard from "./FoodCard";
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick"
import {BURGER_ACTIVE, BURGER_MENU} from "../../../redux/Reducer/ActionTypes";


const Foods = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {foods,burgerMenu,active} = useSelector(state => state)
  const [tabsInMeal, setTabsInMeal] = useState(0)
  const getTitle = () => {
  if (active === 1){
    return t('category.foods.main')
}
  else if (active === 2){
    return t('category.foods.main')
  }
  else if (active === 3){
    return t('category.foods.main')
  }
  else if (active === 4){
    return t('category.foods.main')
  }
  else if (active === 5){
    return t('category.foods.main')
  }
  else if (active === 6){
    return t('category.foods.main')
  }
  else if (active === 7){
    return t('category.foods.main')
  }
  else if (active === 8){
    return t('category.foods.main')
  }
  else if (active === 9){
    return t('category.salads.main')
  }
  else if (active === 10){
    return t('category.salads.main')
  }
  else if (active === 11){
    return t('category.salads.main')
  }
  else if (active === 12){
    return t('category.drinks.main')
  }
  else if (active === 13){
    return t('category.drinks.main')
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
    if (active || !burgerMenu) {
      window.scrollTo({top:500, behavior:"smooth"})
    }
    else window.scrollTo({top:0, behavior:"smooth"})
  }


  const scroolRef = useRef(null)
  const meals = foods.filter(el => el.category_name === "Первые блюда" || el.category_name === "Вторые блюда из говядины" || el.category_name === "Вторые блюда из рыбы" || el.category_name === "Вторые блюда из баранины" || el.category_name === "Общие блюда" || el.category_name === "Вторые блюда из курицы" || el.category_name === "Банкетные блюда" )
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
  const kebabs = foods.filter(el => el.category_name === "Шашлыки")
  const childrensMenu = foods.filter(el => el.category_name === "Детское меню")
  const sideDishes = foods.filter(el => el.category_name === "Гарниры")
  const hotDrinks = foods.filter(el => el.category_name === "Горячие напитки")
  const coldDrinks = foods.filter(el => el.category_name === "Холдные")
  const flour = foods.filter(el => el.category_name === "Мучные")
      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  useEffect(() => {
    WindowClick()
  },[active])
  console.log("set",tabsInMeal)

  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1 onClick={() => setTabsInMeal(0)}>{getTitle()}</h1>
          <div>
            <Slider {...settings}>
              <div>
                <div className={tabsInMeal === 1  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(1) }>{t('category.foods.one')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 2 ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(2)}>{t('category.foods.two')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 3  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(3)}>{t('category.foods.three')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 4  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(4)}>{t('category.foods.four')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 5  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(5)}>{t('category.foods.five')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 6  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(6)}>{t('category.foods.six')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 7  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(7)}>{t('category.foods.seven')}</div>
              </div>
              <div>
                <div className={tabsInMeal === 8  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(8)}>{t('category.foods.eight')}</div>
              </div>
            </Slider>
          </div>
          {
              (active === 1 && tabsInMeal === 0)  &&
              meals.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                />
              })
          }
            {
              tabsInMeal === 1  &&
                  firstMeal.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                />
              })
            }
          {
            tabsInMeal === 2 ?
                generalDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
             tabsInMeal === 3 ?
                secondCoursesOfChicken.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInMeal === 4 ? WindowClick &&
                secondCoursesOfBeef.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInMeal === 5 ? WindowClick &&
                secondCoursesOfLamb.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInMeal === 6 ? WindowClick &&
                secondCoursesOfFish.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInMeal === 7 ? WindowClick &&
                banquetDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInMeal === 8 ? WindowClick &&
                sideDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
           }
          {
            (!burgerMenu && active === 9) ? WindowClick &&
                saladsMayonnaise.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 10) ? WindowClick &&
                saladsVegetableOil.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 11) ? WindowClick &&
                spicySalads.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 12) ? WindowClick &&
                hotDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 13) ? WindowClick &&
                coldDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 14) ? WindowClick &&
                childrensMenu.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 15) ? WindowClick &&
                flour.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 16) ? WindowClick &&
                sideDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 17) ? WindowClick &&
                kebabs.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            (!burgerMenu && active === 18) ? WindowClick &&
                rolls.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            (!burgerMenu && active === 20) ? WindowClick &&
                coldSnacks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
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