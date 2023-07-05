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
  const [tabsInsalads, setTabsInsalads] = useState(0)
  const [tabsInDrinks, setTabsInDrinks] = useState(0)
  const getTitle = () => {
  if (active === 0 || active === 1){
    return <h1 onClick={() => setTabsInMeal(0) && dispatch({type:BURGER_ACTIVE,payload:1}) }>{t('category.foods.main')}</h1>
}
  else if (active === 2){
    return <h1 onClick={() => setTabsInsalads(0) && dispatch({type:BURGER_ACTIVE,payload:2}) }>{t('category.salads.main')}</h1>

  }else if (active === 3){
    return <h1  onClick={() => setTabsInDrinks(0) && dispatch({type:BURGER_ACTIVE,payload:3}) }>{t('category.drinks.main')}</h1>
  }
  else if (active === 4){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:4})}>{t('category.5')}</h1>
  }
  else if (active === 5){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:5})}>{t('category.6')}</h1>
  }
  else if (active === 6){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:6})}>{t('category.7')}</h1>
  }
  else if (active === 7){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:7})}>{t('category.8')}</h1>
  }
  else if (active === 8){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:8})}>{t('category.9')}</h1>
  }
  else if (active === 9){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:9})}>{t('category.10')}</h1>
  }
  else if (active === 10){
    return <h1 onClick={() => dispatch({type:BURGER_ACTIVE,payload:10})}>{t('category.11')}</h1>
  }
  }

  const WindowClick = () => {
    if (active && !burgerMenu) {
      window.scrollTo({top:500, behavior:"smooth"})
    }
    else if (active === 0){
      window.scrollTo({top:0, behavior:"smooth"})
    }
  }


  const scroolRef = useRef(null)
  const meals = foods.filter(el => el.category_name === "Первые блюда" || el.category_name === "Вторые блюда из говядины" || el.category_name === "Вторые блюда из рыбы" || el.category_name === "Вторые блюда из баранины" || el.category_name === "Общие блюда" || el.category_name === "Вторые блюда из курицы" || el.category_name === "Банкетные блюда" )
  const salads = foods.filter(el => el.category_name === "Салаты с майонезом" || el.category_name === "Салаты с растительным маслом" || el.category_name === "Острые салаты (с соевым соусом")
  const drinks = foods.filter(el => el.category_name === "Горячие напитки" || el.category_name === "Холдные")
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
        slidesToShow: 3,
        slidesToScroll: 1,
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
              slidesToScroll: 1,
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
        ]
      };

  useEffect(() => {
    WindowClick()
  },[active])
  console.log("Active",active)
  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <div>{getTitle()}</div>
          <div>
            {
              active === 0 || active === 1 ?             <Slider {...settings}>
                <div>
                  <div hidden={active !== 1} className={tabsInMeal === 1  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInMeal(1) }>{t('category.foods.one')}</div>
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
              </Slider> : ""
            }
            {
              active === 2 ? <Slider {...settings}>
                <div>
                  <div  className={tabsInsalads === 1  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInsalads(1) }>{t('category.salads.one')}</div>
                </div>
                <div>
                  <div className={tabsInsalads === 2 ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInsalads(2)}>{t('category.salads.two')}</div>
                </div>
                <div>
                  <div className={tabsInsalads === 3  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInsalads(3)}>{t('category.salads.three')}</div>
                </div>
              </Slider> : ""
            }
            {
              active === 3 ? <div className={"drink"}>
                <div>
                  <div  className={tabsInDrinks === 1  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInDrinks(1) }>{t('category.drinks.one')}</div>
                </div>
                <div>
                  <div  className={tabsInDrinks === 2  ? "active-tabsMeal" : "tabsMeal"} onClick={() => setTabsInDrinks(2) }>{t('category.drinks.two')}</div>
                </div>
              </div> : ""
            }
          </div>
          {
              ((active === 0 || active ===1) && tabsInMeal === 0) ? WindowClick &&
              meals.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                />
              }) : ""
          }
          {
            (active === 2 && tabsInsalads === 0) ? WindowClick &&
                salads.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                }) : ""
          }
          {
            (active === 3 && tabsInDrinks === 0) ? WindowClick &&
                drinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                }) : ""
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
            tabsInsalads === 1 ? WindowClick &&
                saladsMayonnaise.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : ""
          }
          {
             tabsInsalads === 2 ? WindowClick &&
                saladsVegetableOil.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInsalads === 3 ? WindowClick &&
                spicySalads.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInDrinks === 1 ? WindowClick &&
                hotDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            tabsInDrinks === 2 ? WindowClick &&
                coldDrinks.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
             active === 4 ? WindowClick &&
                childrensMenu.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            active === 5 ? WindowClick &&
                flour.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            active === 6 ? WindowClick &&
                sideDishes.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            active === 7 ? WindowClick &&
                kebabs.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }

          {
            active === 8 ? WindowClick &&
                rolls.map(el =>{
                  return <FoodCard el={el}
                                   key={el.id}
                  />
                })
                : false
          }
          {
            active === 10 ? WindowClick &&
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