import React from 'react';
import "./Foods.scss"
import {BsBasket } from 'react-icons/bs';
import egg from "../../../assets/img/iPhone 13/image 15.png"
import egg2 from "../../../assets/img/burger/iPhone 13/image 15.png"
import egg3 from "../../../assets/img/kr/iPhone 13/image 15.png"
import egg4 from "../../../assets/img/pancake/iPhone 13/image 15.png"
import egg5 from "../../../assets/img/menu/iPhone 13/image 15.png"
import {useTranslation} from "react-i18next";


const Foods = () => {
    const {t} = useTranslation()
    return (
        <div id="food">
            <div className="container">
                <div className="food">
                    <h1>Завтраки</h1>
                    <center>
                        <div className="food--card">
                            <img className="food--card__img1" src={egg} alt=""/>
                            <div className="food--card__word">
                                <h2>Гранола</h2>
                                <h3>Греческий йогурт, свежие фрукты и ягоды</h3>
                                <div className="food--card__word--order">
                                    <h4>238с</h4>
                                    <div className="food--card__word--order__icon1">
                                        <BsBasket/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="food--card">
                            <img className="food--card__img2" src={egg2} alt=""/>
                            <div className="food--card__word">
                                <h2>Клубный сэндвич с картофелем фри</h2>
                                <h3>Свежие помидоры, яичница..</h3>
                                <div className="food--card__word--order">
                                    <h4>238с</h4>
                                    <div className="food--card__word--order__icon2">
                                        <BsBasket/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="food--card">
                            <img className="food--card__img3" src={egg3} alt=""/>
                            <div className="food--card__word">
                                <h2>Круассан Филадельфия</h2>
                                <h3>Со слабосолёной сёмгой,сыром филадельфия,огурцами..</h3>
                                <div className="food--card__word--order">
                                    <h4>238с</h4>
                                    <div className="food--card__word--order__icon3">
                                        <BsBasket/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="food--card">
                            <img className="food--card__img4" src={egg4} alt=""/>
                            <div className="food--card__word">
                                <h2>Сырники</h2>
                                <h3>Обжаренные лепёшки из творога, муки и яиц</h3>
                                <div className="food--card__word--order">
                                    <h4>238с</h4>
                                    <div className="food--card__word--order__icon4">
                                        <BsBasket/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="food--card">
                            <img className="food--card__img5"src={egg5} alt=""/>
                            <div className="food--card__word">
                                <h2>Омлет с овощами,плюс тостом </h2>
                                <h3>Омлет с овощами и тостом</h3>
                                <div className="food--card__word--order">
                                    <h4>238с</h4>
                                    <div className="food--card__word--order__icon5">
                                        <BsBasket/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </center>

                </div>
            </div>
        </div>
    );
};

export default Foods;