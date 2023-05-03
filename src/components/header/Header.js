import React from 'react';
import "./Header.scss"
import logos from "../../assets/img/logos.svg"
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
  const lang = localStorage.getItem("i18nextLng")
  const {i18n} = useTranslation()
    let basket = JSON.parse(localStorage.getItem("basket")) || []
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const nav = useNavigate()
  return (
    <div id='header'>
        <div className="container">
          <div className="header">
              <NavLink to={"/main"}>
                <img src={logos} alt=""/>
              </NavLink>
              <div className="header--end">
                  <div className="header--end__one" onClick={() => nav("/basket")}>
                    <div className={"sup"}
                         style={{
                           display:basket.length ? "flex" : "none"
                         }}
                    >
                      <sup>{basket.length !== 0 ? basket.length : ""}</sup></div>
                      <BiBasket className='header--end__one--icon'/>
                  </div>
                  <div className="header--end__two">
                    <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={lang}>
                      <option value={"ru"}>РУС</option>
                      <option value={"kg"}>КЫР</option>
                      <option value={"en"}>ENG</option>
                    </select>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Header;