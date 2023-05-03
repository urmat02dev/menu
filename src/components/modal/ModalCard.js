import React from 'react';
import {GET_BASKET} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";

const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket)
    const nav = useNavigate()
    const foundProduct = basket.some(e => e.id === el.id)
    function getBasket() {
        dispatch({type:GET_BASKET,payload:el})
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
                            foundProduct ? <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/><AiOutlineArrowRight className='next'/></div>   :<div className="foods--one__basket--icon" onClick={() => getBasket()}>
                                <BiBasket className='icon'/></div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalCard;