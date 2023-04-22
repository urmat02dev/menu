import React from 'react';
import "./Foods.scss"
import {useTranslation} from "react-i18next";
import {data} from "../../fake-backend/backend";
import FoodCard from "./FoodCard";


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
  return (
    <div id="food">
      <div className="container">
        <div className="food">
          <h1>{getTitle()}</h1>

            {
              active === 0 || active === 1 ?
              data[1].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              })
                : ""
            }
          {
            active === 2 ?
              data[2].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 3 ?
              data[3].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 4 ?
              data[4].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 5 ?
              data[5].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 6 ?
              data[6].map(el => {
                return <FoodCard el={el}
                                 modal={modal}
                                 setModal={setModal}
                />
              }) : ''
          }
          {
            active === 7 ?
              data[7].map(el => {
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