import React, {useEffect} from 'react';
import "./Header.scss"
import logos from "../../assets/img/logos.svg"
import img from "../../assets/img/uluu_too_2.svg"
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BURGER_MENU} from "../../redux/Reducer/ActionTypes";


const Header = () => {
    const lang = localStorage.getItem("i18nextLng")
    const {basket,params,burgerMenu} = useSelector(state => state)
    const {i18n} = useTranslation()
    const dispatch = useDispatch()
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
  const nav = useNavigate()
    const getNav = () => {
      nav("/basket")
    }
    const getBurgerMenu = () => {
      dispatch({type:BURGER_MENU, payload:!burgerMenu})
    }
  return (
    <div id='header'>
        <div className="container">
          <div className="header">
              <NavLink to={`/${params}/main`}>
                <img src={img} alt=""/>
              </NavLink>
              <div className="header--end">
                  <div className="header--end__one" onClick={() => nav("/basket")}>
                    <div className={"sup"}
                         style={{
                           display: basket.length  ?  "flex" : "none"
                         }}>
                      <sup>{basket  ? basket.length : "none" }</sup>
                    </div>
                      <BiBasket className='header--end__one--icon' onClick={() => getNav()}/>
                  </div>
                  <div className="header--end__two" onClick={getBurgerMenu}>
                    <div className="burger one">
                        <div className="one--bus"></div>
                        <div className="one--bus"></div>
                        <div className="one--bus"></div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Header;