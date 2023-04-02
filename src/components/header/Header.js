import React from 'react';
import "./Header.scss"
import logos from "../../assets/img/logos.svg"
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
const Header = () => {
  const lang = localStorage.getItem("i18nextLng")
  const {i18n} = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div id='header'>
        <div className="container">
          <div className="header">
              <img src={logos} alt=""/>
              <div className="header--end">
                  <div className="header--end__one">
                      <BiBasket/>
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