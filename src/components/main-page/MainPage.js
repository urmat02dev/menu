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
import {GET_BASKET, GET_PARAMS} from "../../redux/Reducer/ActionTypes";
import Loader from "../loader/Loader";
import axios from "axios";
import {ran} from "../starts/random";


const MainPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {cardId} = useSelector(state => state)
    async function getCreateTable () {
        const url = await axios.post("https://aitenir.pythonanywhere.com/api/carts/",{
            "table": ran
        })
        dispatch({type:GET_BASKET,payload:url.data.items})
        console.log(url)
    }

    const [active, setActive] = useState(0)
    const [best, setBest] = useState(true)
    useEffect(() => {
        getCreateTable()
    },[])
    return (
        <div>
            <Header/>
            <Modal/>
            <Search/>
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
        </div>
    );
};

export default MainPage;