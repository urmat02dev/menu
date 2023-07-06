import './App.scss';
import {Route, Routes, useNavigate} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect} from "react";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {BACKEND_GET_URL} from "./components/starts/random";
import {GET_FOODS} from "./redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Admin from "./components/admin/Admin";
import SignUp from "./components/admin/signUp/SignUp";
import {data} from "./components/fake-backend/backend";
import Tables from "./components/tables/Tables";


function App() {
    const dispatch = useDispatch()
    const {params} = useSelector(state => state)
    async function getFoods() {
        const url = await axios.get(`${BACKEND_GET_URL}dishes`)
        const {data} = url
        dispatch({type: GET_FOODS, payload: data})
    }

    const getFakeFoods = () => {
        dispatch({type: GET_FOODS, payload: data})
    }

    useEffect(() => {
        getFoods()
    }, [])
    console.log("pa",params)
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Tables/>}/>
                <Route path={`/:id`} element={<Starts/>}/>
                <Route path={`/:id/main/`} element={<MainPage/>}/>
                <Route path={`/:id/basket`} element={<Basket/>}/>
                <Route path={`/:id/search`} element={<SearchResult/>}/>
                <Route path={`/:id/main/print`} element={<BasketModal/>}/>
                <Route path="/admin" element={<SignUp/>}/>
                <Route path={`/orders`} element={<Admin/>}/>
            </Routes>
        </>
    );
}

export default App;
