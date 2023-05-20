import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import {IoMdClose} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {CARD_ID, DELETE, GET_BASKET, MINUS, PLUS} from "../../redux/Reducer/ActionTypes";
import {useTranslation} from "react-i18next";
import axios from "axios";

const BasketCard = ({el}) => {
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    const {cardId} = useSelector(state => state)
    const [loader, setLoader] = useState(false)
    const [count , setCount] = useState(el.quantity)
    const {t} = useTranslation()
    const food = el.dish
    console.log(count)
    const handleIncrement = () =>{
        const newCount = count + 1
        changeCount(el,newCount)
    }
    const handleDecrement = () =>{
        if (el.quantity > 1) {
            const newCount = count - 1
            changeCount(el,newCount)
        }
    }
    const getBack =async () => {
        const url =  await axios.get(`https://aitenir.pythonanywhere.com/api/carts/${cardId}/`)
        dispatch({type:CARD_ID, payload:url.data.id})
        dispatch({type:GET_BASKET,payload:url.data.items})

        console.log(url)
    }
    const getTitle = (food) => {
        if (lang === "en") {
            return food.name_en
        } else if (lang === "ru") {
            return food.name_ru
        } else if (lang === "kg") {
            return food.name_kg
        }
    }

    const changeCount = async (el,newCount) => {
        setCount(newCount)
        setLoader(true)
        console.log("NEwCount",newCount)
           const url =  await axios.post(`https://aitenir.pythonanywhere.com/api/carts/${cardId}/add_to_card/`,
                {
                    "quantity": newCount,
                    "dish": el.dish.id,
                })

            setLoader(false)
            dispatch({type:GET_BASKET,payload:url.data.items})
            console.log(url)
            console.log(cardId)
    }


    const [del, setDel] = useState(false)
    const getDelete = (el) => {
        setDel(!del)
    }

    const getImg = (food) => {
        if (food.image.startsWith("h")) {
            return food.image
        } else if (food.image.startsWith("/m")) {
            return `https://aitenir.pythonanywhere.com/${food.image}`
        }
    }

    useEffect(() => {
        getBack()
        changeCount()
    }, [])

    console.log(cardId)
    console.log(count)
    return (

            <div className="basket--card" key={el.id} style={{translateY: del ? '-400px' : ''}}>
            <img className="basket--card__img" src={getImg(food)} alt=""/>
            <div className="basket--card__word">
                <div className={"desc"}>
                    <h2>{getTitle(food)}</h2>
                    <div className="close" onClick={() => {
                        changeCount(el,1,"remove_from_cart")
                    }}>
                        <IoMdClose onClick={() => getDelete(el)} className={"icon"}/>
                    </div>
                </div>
                <p>{food.gram}г.</p>
                <div className="basket--card__word--order">

                    <div className={"price"}>
                        <h4>{food.price * el.quantity}{t("basket.s")}.</h4>
                    </div>

                    <div className={"count"}>
                        <span style={{color: `${el.quantity > 1 ? "" : "#FFFFFF80"}`}}
                              onClick={handleDecrement}><AiOutlineMinus/></span>
                        <p>{el.quantity}</p>
                        <span onClick={handleIncrement}> <AiOutlinePlus/></span>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BasketCard;