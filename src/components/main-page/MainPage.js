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
import {GET_PARAMS} from "../../redux/Reducer/ActionTypes";


const MainPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [active, setActive] = useState(0)
    const [best, setBest] = useState(true)
    useEffect(() => {

    },[])
    return (
        <div>

            <Header/>
            <Search/>
            <Modal/>
            <Category active={active}
                      setActive={setActive}
                      best={best}
                      setBest={setBest}
            />
            <FoodsSlider
                best={best}
                setBest={setBest}
            />
            <Foods
                active={active}
                setActive={setActive}/>
            <Modal/>
        </div>
    );
};

export default MainPage;