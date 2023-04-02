import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";
import Header from "./components/header/Header";
import Search from "./components/main-page/search/Search";
import Category from "./components/main-page/category/Category";
import FoodsSlider from "./components/main-page/foods-slider/FoodsSlider";

function App() {
  return (
   <>

     <Routes>
       <Route path="/" element={<Starts/>}/>
     </Routes>
       <Header/>
       <Search/>
       <Category/>
       <FoodsSlider/>
   </>
  );
}

export default App;
