import './App.scss';
import {Route, Routes, useNavigate} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect, useState} from "react";
import Modal from "./components/modal/Modal";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {ran} from "./components/starts/random";
import {GET_PARAMS} from "./redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";

console.log(ran)
function App() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        nav(`/${ran}`)
        dispatch({type:GET_PARAMS,payload:ran})
    },[ran])
  return (
   <>
     <Routes>
       <Route path={`/:id`} element={<Starts/>}/>
       <Route path={`/main/:${ran}`} element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
       <Route path="/search" element={<SearchResult/>}/>
       <Route path="/main/print" element={<BasketModal/>}/>
     </Routes>
   </>
  );
}

export default App;
