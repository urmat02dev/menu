import {AiOutlineClose} from "react-icons/ai";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {GET_MODAL} from "../../redux/Reducer/ActionTypes";
const Modal = ({modal,setModal}) => {
    const {modalDetail} = useSelector(state => state)
    // const {title,title_ru,title_kg,desc,desc_kg,desc_ru,mass,price,quantity} = modalDetail
    const lang = localStorage.getItem("i18nextLng")
    // function getTitle () {
    //     if (lang === "en"){
    //         return <h1>{title}</h1>
    //     }
    //     if (lang === "ru"){
    //         return <h1>{title_ru}</h1>
    //     }
    //     if (lang === "kg"){
    //         return <h1>{title_kg}</h1>
    //     }
    // }
    // function getDesc () {
    //     if (lang === "en"){
    //         return <p>{desc}</p>
    //     }
    //     if (lang === "ru"){
    //         return <p>{desc_ru}</p>
    //     }
    //     if (lang === "kg"){
    //         return <p>{desc_kg}</p>
    //     }
    // }

    const getClose = () => {
        setModal(!modal)
    }
    console.log(modalDetail)
  return (
    <div>
        
    </div>
  );
};

export default Modal;