import React from 'react';
import "./Modal.scss"
import {
    GET_BASKET,
    MINUS,
    MODAL,
    MODAL_MINUS,
    MODAL_PLUS,
    MODAL_TO_BASKET,
    PLUS
} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import modal from "./Modal";

const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {basket} = useSelector(state => state)
    const found  = basket.some(e => e.id === el.id)

    const  getBasket = (el) => {
        dispatch({type:MODAL_TO_BASKET, payload: el})
    }
    const getMinus = (el) =>{
        dispatch({type: MODAL_MINUS, payload: el})
    }
    const  getPlus = (el) => {
        dispatch({type:MODAL_PLUS,payload:el})
    }
    console.log(el.title)
    return (
        <>
                <div className={"modal--img"}>
                    <img src={el.image} alt=""/>
                </div>
                <div className="modal--desc">
                    <h2 className="modal--desc__h2">{el.title }</h2>
                    <p className='modal--desc__h3'>{el.desc}</p>
                    <h4>{el.mass}г.</h4>
                    <h5>Цена:<span>{el.price}c</span></h5>
                </div>
            <div className="modal--basket">
                {
                    found ?
                        <div className="basket"
                             onClick={() => nav("/basket") || dispatch({type:MODAL, payload:false})}>
                            <h1 className='basket--were'>Добавить</h1>
                            <div className="icon-block" >
                                <div  className="foods--one__basket--icon"><BsBasket3Fill className='icon'/></div>
                            </div>
                        </div>
                        :
                        <div className="basket" onClick={() => getBasket(el)}>
                            <h1 className='basket--were'>Добавить</h1>
                            <div className="icon-block" >
                                <div className="foods--one__basket--icon" >
                                    <BiBasket className='icon'/></div>
                            </div>
                        </div>
                }
                <div className="count">
                    <span style={{

                    }}
                        onClick={() => getMinus(el)}><AiOutlineMinus className={"ico"} style={{
                        color:`${el.quantity > 1 ? "" : "rgba(10,10,10,0.39)" }`
                    }}/></span>
                    <p>{el.quantity}</p>
                    <span onClick={() => getPlus(el)}><AiOutlinePlus className={"ico"}/></span>
                </div>
            </div>
        </>
    );
};

export default ModalCard;