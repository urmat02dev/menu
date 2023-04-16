import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useState} from "react";
import Modal from "./components/modal/Modal";
import Search from "./components/main-page/search/Search";
import SearchResult from "./components/main-page/search/SearchResult";


function App() {

  return (
   <>
     <Routes>
       <Route path="/" element={<Starts/>}/>
       <Route path="/main" element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
       <Route path="/search" element={<SearchResult/>}/>
       <Route path="/modal" element={<Modal/>}/>
       <Route path="/detail-page/:id" element={<Modal/>}/>
     </Routes>
   </>
  );
}

export default App;
