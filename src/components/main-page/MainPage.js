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
  const [best , setBest ] = useState(true)
  return (
    <div>
      <Header/>
        <Search/>
      <Category active={active}
      setActive={setActive}
      best={best}
      setBest={setBest}
      />
      <FoodsSlider
          modal={modal}
          setModal={setModal}
          best={best}
          setBest={setBest}
      />
      <Foods
          modal={modal}
          setModal={setModal}
        active={active}
      setActive={setActive}/>

    </div>
  );
};

export default MainPage;