import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import MainPage from "./components/main-page/MainPage";
import Basket from "./components/basket/Basket";

function App() {
  return (
   <>

     <Routes>
       <Route path="/" element={<Starts/>}/>
       <Route path="/main" element={<MainPage/>}/>
       <Route path="/basket" element={<Basket/>}/>
     </Routes>
   </>
  );
}

export default App;
