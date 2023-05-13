import React, {useEffect, useState} from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import {data} from "../../fake-backend/backend";
import FoodCard from "./FoodCard";
import axios from "axios";


const Foods = ({active,setActive,modal,setModal}) => {
  const {t} = useTranslation()
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
  const breakfast = data.filter(el => el.type === "breakfast")
  const salad = data.filter(el => el.type === "salad")
  const foods = data.filter(el => el.type === "foods")
  const pizza = data.filter(el => el.type === "pizza")
  const desert = data.filter(el => el.type === "desert")
  const juice = data.filter(el => el.type === "juice")
  const drink = data.filter(el => el.type === "drink")
  const [back, setBack] = useState([])
  const getBack = async () => {
    const url = await axios("http://192.168.0.253:8000/api/dishes/")
    const {data} = url
    setBack(data)
  }
  useEffect(() => {
    getBack()
  },[])
  console.log(back)
  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>{getTitle()}</h1>

            {
              active === 0 || active === 1 ?
              breakfast.map(el =>{
                return <FoodCard el={el}
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
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 3 ?
              back.map(el => {
                return <div>
                  <h1>{el.name}</h1>
                </div>
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
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 6 ?
              juice.map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 7 ?
              drink.map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}/>
              }) : ''
          }
          {
            active === 8 ?
              data[8].map(el => {
                return <FoodCard el={el}
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