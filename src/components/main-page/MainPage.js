import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import Search from "./search/Search";
import Category from "./category/Category";
import FoodsSlider from "./foods-slider/FoodsSlider";
import Foods from "./foods/Foods";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import "./MainPage.scss"
import {useParams} from "react-router-dom";
import BurgerMenu from "../header/BurgerMenu";

const MainPage = () => {

    return (
        <div>
            <Header/>
            <Modal/>
            <BurgerMenu/>
            <Search/>
            <FoodsSlider/>
            <Foods/>
        </div>
    );
};

export default MainPage;