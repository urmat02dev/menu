import React from 'react';
import Header from "../header/Header";
import Search from "./search/Search";
import Category from "./category/Category";
import FoodsSlider from "./foods-slider/FoodsSlider";
import Foods from "./foods/Foods";
import {data} from "../fake-backend/backend";
import Modal from "../modal/Modal";

const MainPage = () => {

  return (
    <div>
      <Header/>
      <Search/>
      <Category/>
      <FoodsSlider/>
      <Foods/>
        <Modal/>
    </div>
  );
};

export default MainPage;