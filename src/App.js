import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import React, {useState} from "react";
import Modal from "./components/modal/Modal";
import SearchResult from "./components/main-page/search/SearchResult";
import BasketModal from "./components/basket/BasketModal";


function App() {

  return (
   <>
     <Routes>
       <Route path="/" element={<Starts/>}/>
       <Route path="/main" element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
       <Route path="/search" element={<SearchResult/>}/>
       <Route path="/detail/:id" element={<Modal/>}/>
       <Route path="/main/print" element={<BasketModal/>}/>
     </Routes>
   </>
  );
}

export default App;
