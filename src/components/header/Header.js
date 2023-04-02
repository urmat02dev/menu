import React from 'react';
import "./Header.scss"
import logos from "../../assets/img/logos.svg"
import {BiBasket} from "react-icons/bi";
const Header = () => {
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
                      <select>
                          <option>РУС</option>
                          <option>КЫР</option>
                          <option>ENG</option>
                      </select>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Header;