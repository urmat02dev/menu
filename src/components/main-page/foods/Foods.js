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
  const breakfast = foods.filter(el => el.category_name === "Вторые блюда из баранины")
  const salad = foods.filter(el => el.category_name === "Salads")
  const food = foods.filter(el => el.category_name === "Dishes")
  const pizza = foods.filter(el => el.category_name === "Pizza")
  const desert = foods.filter(el => el.category_name === "Dessert")
  const juice = foods.filter(el => el.category_name === "Potables")
  const drink = foods.filter(el => el.category_name === "Hot")
  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>{getTitle()}</h1>

            {
              active === 0 || active === 1 ?
              breakfast.map(el =>{
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              })
                : ""
            }
          {
            active === 2 ?
              salad.map(el => {
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 3 ?
              food.map(el => {
                return <FoodCard el={el}/>
              }) : ''
          }
          {
            active === 4 ?
              pizza.map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 5 ?
              desert.map(el => {
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 6 ?
              juice.map(el => {
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 7 ?
              drink.map(el => {
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}/>
              }) : ''
          }
          {
            active === 8 ?
              data[8].map(el => {
                return <FoodCard el={el}
                                 key={el.id}
                                 modal={modal}
                                 setModal={setModal}/>
              }) : ''
          }

        </div>
      </div>
    </div>
  );
};

export default Foods;