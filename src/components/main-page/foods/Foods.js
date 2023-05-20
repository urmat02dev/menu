import React, {useEffect, useState} from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import {data} from "../../fake-backend/backend";
import FoodCard from "./FoodCard";
import axios from "axios";
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
  const breakfast = foods.filter(el => el.category === "b06e5329-2fe7-4a57-a0d7-cf1b3005d740")
  const salad = foods.filter(el => el.category === "bfdd05bb-6744-42e7-b884-8271769e773c")
  const food = foods.filter(el => el.category === "b733d72f-3026-4c05-9d3b-ba72a1269258")
  const pizza = foods.filter(el => el.category === "5e61b742-d303-4daa-bddf-3fae745f0959")
  const desert = foods.filter(el => el.category === "f38b8b75-991c-4ad2-9e19-13443e1c3708")
  const juice = foods.filter(el => el.category === "1b7274d6-badd-41e4-8fca-d7db7d724f0b")
  const drink = foods.filter(el => el.category === "fcd8d1c2-797e-4b22-a875-85987bda7e93")
  const [back, setBack] = useState([])
  const getBack = async () => {
    const url = await axios("https://aitenir.pythonanywhere.com/api/dishes/")
    const {data} = url
    setBack(data)
  }
  useEffect(() => {
    getBack()
  },[])
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