import React from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import {data} from "../../fake-backend/backend";
import FoodCard from "./FoodCard";


const Foods = ({active,setActive}) => {
  const {t} = useTranslation()
  console.log(active)
  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>Завтраки</h1>

            {
              active === 0 || active === 1 ?
              data[0].map(el => {
                return <FoodCard el={el}/>
              })
                : ""
            }
          {
            active === 2 ?
              data[1].map(el => {
                return <FoodCard el={el}/>
              }) : ''
          }




        </div>
      </div>
    </div>
  );
};

export default Foods;