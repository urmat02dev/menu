import './App.scss';
import {Route, Routes, useNavigate} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect} from "react";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {getData, ids, ran} from "./components/starts/random";
import {CARD_ID, GET_BASKET, GET_FOODS, GET_PARAMS} from "./redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";


function App() {
    const nav = useNavigate()
    const dispatch = useDispatch()

    async  function getFoods () {
        const url = await axios.get("http://aitenir.pythonanywhere.com/api/dishes/")
        const {data} = url
        dispatch({type:GET_FOODS,payload:data})
    }

    useEffect(()=>{
        getFoods()
        nav("/1")
    },[])
  return (
   <>
     <Routes>
       <Route path={`/:${ids}/`} element={<Starts/>}/>
       <Route path={`/:${ids}/main/`} element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
       <Route path="/search" element={<SearchResult/>}/>
       <Route path="/1/main/print" element={<BasketModal/>}/>
       <Route path="/1/main/print/checkout" element={<BasketModal/>}/>
     </Routes>
   </>
  );
}

export default App;
