import React from 'react';
import {GET_BASKET, MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";
import modal from "./Modal";

const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const  getBasket = (el) => {
        console.log(el)
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        let foundProduct = basket.find(e => e.id === el.id )
        if (foundProduct){
            basket = basket.map(e => e.id === el.id ? {...e, quantity: e.quantity + 1}: e)
        }else {
            basket = [...basket, {...el, quantity: 1}]
        }
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:GET_BASKET, payload: el})
    }
    const getMinus = () =>{
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = basket.map(e => {
            if (e.quantity > 1) {
                return {...e, quantity: e.quantity - 1}
            }else return e
        })
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type: MINUS, payload: el})
    }
    const  addPlus = () => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        let foundProduct = basket.find(e => e.id === el.id )
        if (foundProduct){
            basket = basket.map(e => e.id === el.id ? {...e, quantity: e.quantity + 1}: e)
        }else {
            basket = [...basket, {...el, quantity: 1}]
        }
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:PLUS,payload:el})
    }

    return (
        <>
                <div className={"modals--img"}>
                    <img src={el.image} alt=""/>
                </div>
                <div className="modals--desc">
                    <h2>{el.title}</h2>
                    <h3>{el.desc}</h3>
                    <h4>{el.mass}г.</h4>
                    <h5>Цена:<span>{el.price}c</span></h5>
                </div>
            <div className="modals--basket">
                <div className="basket">
                    Добавить в
                    <div className="icon-block" onClick={() => getBasket()}>
                        {
                            el.id ? <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/><AiOutlineArrowRight className='next'/></div>   :<div className="foods--one__basket--icon" onClick={() => getBasket()}>
                                <BiBasket className='icon'/></div>
                        }
                    </div>
                </div>
                <div className="count">
                    <span onClick={() => getMinus()}>-</span>
                    <p>{el.quantity}</p>
                    <span onClick={() => addPlus()}>+</span>
                </div>
            </div>
        </>
    );
};

export default ModalCard;