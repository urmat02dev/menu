import './App.scss';
import {Route, Routes, useParams} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect, useState} from "react";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {BACKEND_GET_URL, parametr} from "./components/starts/random";
import {GET_FOODS} from "./redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Admin from "./components/admin/Admin";
import SignUp from "./components/admin/signUp/SignUp";


function App() {
    const dispatch = useDispatch()
    const {params} = useSelector(state => state)

    async  function getFoods () {
        const url = await axios.get(`${BACKEND_GET_URL}dishes`)
        const {data} = await url
        dispatch({type: GET_FOODS, payload: data})
    }

    useEffect(() => {
        getFoods()
    })

    return (
        <>

            <Routes>
                <Route path={`/:id`} element={<Starts/>}/>
                <Route path={`/${params}/main/`} element={<MainPage/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path={`/${params}/main/print`} element={<BasketModal/>}/>
                <Route path="/admin" element={<SignUp/>}/>
                <Route path={`/orders`} element={<Admin/>}/>
            </Routes>
        </>
    );
}

export default App;
