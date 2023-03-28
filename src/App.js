import './App.scss';
import {Route, Routes} from "react-router-dom";
import Starts from "./components/starts/Starts";

function App() {
  return (
   <>
     <Routes>
       <Route path="/" element={<Starts/>}/>
     </Routes>
   </>
  );
}

export default App;
