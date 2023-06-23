import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import Search from "./search/Search";
import Category from "./category/Category";
import FoodsSlider from "./foods-slider/FoodsSlider";
import Foods from "./foods/Foods";
import Modal from "../modal/Modal";
import {useDispatch} from "react-redux";
import "./MainPage.scss"
import {useParams} from "react-router-dom";
import BurgerMenu from "../header/BurgerMenu";

const MainPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [active, setActive] = useState(0)
    const [best, setBest] = useState(true)
    let basket  = JSON.parse(localStorage.getItem("backend"))
    useEffect(() => {

    },[basket])
    return (
        <div>
            <Header/>
            <Modal/>
            <BurgerMenu active={active}
                        setActive={setActive}
                        best={best}
                        setBest={setBest}/>
            <Search/>

            <FoodsSlider
                best={best}
                setBest={setBest}
            />
            <Foods
                active={active}
                setActive={setActive}/>
        </div>
    );
};

export default MainPage;