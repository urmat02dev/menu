import React, {useState} from 'react';
import Header from "../header/Header";
import Search from "./search/Search";
import Category from "./category/Category";
import FoodsSlider from "./foods-slider/FoodsSlider";
import Foods from "./foods/Foods";
import Modal from "../modal/Modal";

const MainPage = () => {
    const [modal , setModal] = useState(false)
  return (
    <div>
      <Header/>
      <Search/>
      <Category/>
      <FoodsSlider
          modal={modal}
          setModal={setModal}
      />
      <Foods/>
      <Modal
          modal={modal}
          setModal={setModal}
      />
    </div>
  );
};

export default MainPage;