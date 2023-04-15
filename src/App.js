import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";
import Modal from "./components/modal/Modal";
import React, {useState} from "react";

function App() {
const [modalActive,setActive] = useState(false)

  return (
   <>
       <button  onClick={() => setActive(true)}>MODAL</button>

     <Routes>
       <Route path="/" element={<Starts/>}/>
       <Route path="/main" element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
    </Routes>
       <Modal active={modalActive} setActive={setActive}/>
       <Route path="/detail-page/:id" element={<Modal/>}/>
       <Route path="/modal" element={<Modal/>}/>
     </Routes>
   </>
  );
}

export default App;
