import './App.scss';
import {Route, Routes, useNavigate} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useEffect, useState} from "react";
import Modal from "./components/modal/Modal";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";
import {getData, ran} from "./components/starts/random";
import {GET_FOODS, GET_PARAMS} from "./redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import axios from "axios";

console.log(ran)
function App() {
    const nav = useNavigate()
    const dispatch = useDispatch()

     // let [ip,setIP] = useState('');
    //     const getData = async()=>{
    //     const res = await axios.get('https://geolocation-db.com/json/')
    //     console.log(res.data);
    //     await setIP(res.data.IPv4)
    //
    // }
    async  function getFoods () {
        const url = await axios.get("http://aitenir.pythonanywhere.com/api/dishes/")
        const {data} = url
        dispatch({type:GET_FOODS,payload:data})
    }

    useEffect(()=>{
        getFoods()
        nav(`/${ran}`)
    },[])
  return (
   <>
       <div>{}</div>
     <Routes>
       <Route path={`/:id`} element={<Starts/>}/>
       <Route path={`/:${ran}/main/`} element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
       <Route path="/search" element={<SearchResult/>}/>
       <Route path="/main/print" element={<BasketModal/>}/>
     </Routes>
   </>
  );
}

export default App;
