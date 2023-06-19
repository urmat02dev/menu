import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect, useState} from "react";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import { parametr } from "./components/starts/random";
import {GET_FOODS} from "./redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import axios from "axios";
import Admin from "./components/admin/Admin";
import SignUp from "./components/admin/signUp/SignUp";


function App() {
    const dispatch = useDispatch()
    const [networkType, setNetworkType] = useState('');
    const [isConnectedToWifi, setIsConnectedToWifi] = useState(false);

    async  function getFoods () {
        const url = await axios.get("https://aitenir.pythonanywhere.com/dishes/")
        const {data} = await url
        dispatch({type: GET_FOODS, payload: data})
    }



    useEffect(() => {
        // if (navigator.connection) {
        //     const { type } = navigator.connection;
        //     setIsConnectedToWifi(type === 'wifi');
        // } else {
        //     console.error('Браузер не поддерживает Web API "navigator.connection".');
        // }
        getFoods()
    })
    return (
        <>
            {/*<div>*/}
            {/*    {isConnectedToWifi ? (*/}
            {/*        // Ваше содержимое сайта*/}
            {/*        <p>Добро пожаловать на сайт, работающий только при подключении к Wi-Fi!</p>*/}
            {/*    ) : (*/}
            {/*        // Сообщение о недоступности сайта без Wi-Fi*/}
            {/*        <p>Сайт доступен только при подключении к Wi-Fi.</p>*/}
            {/*    )}*/}
            {/*</div>*/}
            <Routes>
                <Route path={`/`} element={<Starts/>}/>
                <Route path={`/${parametr}/main/`} element={<MainPage/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path={`/${parametr}/main/print`} element={<BasketModal/>}/>
                <Route path="/admin" element={<SignUp/>}/>
                <Route path={`/orders`} element={<Admin/>}/>
            </Routes>
        </>
    );
}

export default App;
