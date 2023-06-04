import './App.scss';
import {Route, Routes, useNavigate} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect} from "react";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {ids, parametr, ran} from "./components/starts/random";
import {GET_FOODS} from "./redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import axios from "axios";
import Admin from "./components/admin/Admin";
import SignUp from "./components/admin/signUp/SignUp";


function App() {
    const nav = useNavigate()
    const dispatch = useDispatch()

    async function getFoods() {
        const url = await axios.get("https://aitenir.pythonanywhere.com/dishes/")
        const {data} = await url
        await dispatch({type: GET_FOODS, payload: data})
    }
    function getNav() {
        if (!parametr){
            nav(`/${parametr}`)
        }
    }
    useEffect(() => {
        getFoods()
        getNav()
    }, [])
    return (
        <>
            <Routes>
                <Route path={`/${parametr}/`} element={<Starts/>}/>
                <Route path={`/${parametr}/main/`} element={<MainPage/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path={`/${parametr}/main/print`} element={<BasketModal/>}/>
                <Route path="/sign" element={<SignUp/>}/>
                <Route path={`/admin`} element={<Admin/>}/>
            </Routes>
        </>
    );
}

export default App;
