import React, {useRef, useState} from 'react';
import './BurgerMenu.scss'
import i18n from "i18next";
import {useDispatch, useSelector} from "react-redux";
import {BURGER_ACTIVE, BURGER_MENU, MODAL} from "../../redux/Reducer/ActionTypes";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BiBowlRice, BiDish, BiDrink, BiSushi} from "react-icons/bi";
import {TbSalad} from "react-icons/tb";
import {CiPizza} from "react-icons/ci";
import {GiRaddish, GiSlicedBread, GiSushis} from "react-icons/gi";
import {MdKebabDining} from "react-icons/md";



const BurgerMenu = () => {
    const lang = localStorage.getItem("i18nextLng")
    const {burgerMenu,active} = useSelector(state => state)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const {t} = useTranslation()

    const getClose = async () => {

        dispatch({type:BURGER_MENU,payload:false})
    }
    console.log("Active", active)
    return (
        <>
            <div id={"blur"} hidden={!burgerMenu} style={{
                zIndex:burgerMenu ? "99" : "",
            }} onClick={() => getClose()}/>
            <div style={{
                left: burgerMenu ?  "" : "3000px",
                zIndex:burgerMenu ? "99" : "",
                cursor: "pointer"

            }} className={"burger-menu"}>
                <div className="burger-menu--top">
                    <div className="burger-menu--top__select">
                        <select className={'select'} onChange={(e) => changeLanguage(e.target.value)} defaultValue={lang}>
                            <option  value={"ru"}>РУС</option>
                            <option  value={"kg"}>КЫР</option>
                            <option  value={"en"}>ENG</option>
                        </select>
                    </div>
                    <div className="burger-menu--top--close" onClick={() => getClose()}>
                        &times;
                    </div>

                </div>
                <hr/>
                <div className="burger-menu--category">
                    <div className="category-one" onClick={() => {
                    }}>
                        <div className="category-one__1">
                            <div className={'category-one__1--ibonka'}><BiDish/></div>
                            <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:1})}>{t('category.foods.main')}</h3>
                        </div>
                        <div className="slet" style={{
                        }}>
                        </div>
                    </div>

                    <div className="category-two">
                        <div className='category-two__2'>
                            <div className={'category-one__1--ibonka'}><TbSalad/></div>
                            <h3 onClick={() => { getClose() && dispatch({type:BURGER_ACTIVE,payload:2})
                            }}>{t('category.salads.main')}</h3>
                        </div>
                    </div>

                    <div className="category-three">
                        <div className="category-three__3">
                            <div className={'category-one__1--ibonka'}><BiDrink/></div>
                            <h3 onClick={() => {
                                getClose() && dispatch({type:BURGER_ACTIVE,payload:3})
                            }}>{t('category.drinks.main')}</h3>
                        </div>
                    </div>

                    <div className="category-one4">
                        <div className={'category-one__1--ibonka'}><CiPizza/></div>
                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:4})}>{t('category.5')}</h3>
                    </div>

                    <div className="category-five">
                        <div className={'category-one__1--ibonka'}><GiSlicedBread/></div>
                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:5})}>{t('category.6')}</h3>
                    </div>

                    <div className="category-one5">
                        <div className={'category-one__1--ibonka'}><BiBowlRice/></div>
                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:6})}>{t('category.7')}</h3>
                    </div>

                    <div className="category-one6">
                        <div className={'category-one__1--ibonka'}><MdKebabDining/></div>


                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:7})}>{t('category.8')}</h3>
                    </div>

                    <div className="category-one6">
                        <div className={'category-one__1--ibonka'}><GiSushis/></div>
                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:8})}>{t('category.9')}</h3>
                    </div>

                    <div className="category-one6">
                        <div className={'category-one__1--ibonka'}><BiSushi/></div>


                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:9})}>{t('category.10')}</h3>
                    </div>
                    <div className="category-one6">
                        <div className={'category-one__1--ibonka'}><GiRaddish/></div>


                        <h3 onClick={() => getClose() && dispatch({type:BURGER_ACTIVE,payload:10})}>{t('category.11')}</h3>
                    </div>

                </div>




            </div>
        </>

    );
};

export default BurgerMenu;