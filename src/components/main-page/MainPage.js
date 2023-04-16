import React, {useState} from 'react';
import Header from "../header/Header";
import Search from "./search/Search";
import Category from "./category/Category";
import FoodsSlider from "./foods-slider/FoodsSlider";
import Foods from "./foods/Foods";
import Modal from "../modal/Modal";

const MainPage = () => {
    const [modal , setModal] = useState(false)
  const [active, setActive] = useState(0)
  return (
    <div>
      <Header/>
      <Search/>
      <Category active={active}
      setActive={setActive}/>
      <FoodsSlider
          modal={modal}
          setModal={setModal}

      />
      <Foods
        active={active}
      setActive={setActive}/>
      <Modal
          modal={modal}
          setModal={setModal}
      />
    </div>
  );
};

export default MainPage;