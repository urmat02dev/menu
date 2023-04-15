import React from 'react';
import logo from "../../../assets/img/Rectangle 44.png";
import {BiBasket} from "react-icons/bi";

const FoodPage = () => {
    return (
        <div className="foods--one">
            <img src={logo} alt=""/>
            <h3>Панкейк</h3>
            <p>Мука, молоко, банан, сахарная пудра,смородина</p>
            <div className='foods--one__basket'>
                <h3>150c</h3>
                <BiBasket className='foods--one__basket--icon'/>
            </div>
        </div>
    );
};

export default FoodPage;