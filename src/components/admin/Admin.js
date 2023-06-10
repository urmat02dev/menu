import React, {useEffect, useState} from 'react';
import './Admin.scss'
import logos from "../../assets/img/logos.svg";
import burger from "../../assets/img/Vectork.svg";
import setting from "../../assets/img/setting.svg";
import axios from "axios";
import {useSelector} from "react-redux";
import foods from "../main-page/foods/Foods";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const {token_Id, foods} = useSelector(s => s)
    const nav = useNavigate()
    const getAdmin = async () => {
        try {
            setLoader(true)
            const url = await axios.get(`https://aitenir.pythonanywhere.com/api/orders-get`, {
                headers: {
                    "Authorization": `Token ${token_Id}`
                }
            })
            setAdmin(url.data)
            // console.log(url)
            setLoader(false)
        } catch (e) {
            setError(e)
        }
    }
    const getNav = () => {
        if (error) {
            nav("/admin")
        }

    }
    let orders = admin.map(order =>
        order.items.map(orderItem =>
            foods.find(food => food.id === orderItem.dish)))
    let quantity = admin.map(order => order.items.map(el => <tr>{el.quantity}</tr>))
    let quan = admin.map(order => order.items.map(el => el.quantity ))
    let total = orders.map(item => item.map(el => el))

    console.log("Admin", admin)
    console.log("orders", orders)
    console.log("total", total)
    console.log("quan", quan)
    // console.log(error)

    function compareByTimeCreated(admin, b) {
        const dateA = new Date(admin.time_created);
        const dateB = new Date(b.time_created);
        return  dateB - dateA;
    }
    admin.sort(compareByTimeCreated)
    useEffect(() => {

        getAdmin()
        getNav()
    }, [admin,error])


    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <div className="admin--header">
                        <img className='admin--header__logos' src={logos} alt=""/>
                        <div className='admin--header__end'>
                            <img src={burger} alt=""/>
                            <img src={setting} alt=""/>
                        </div>
                    </div>
                    <div className="admin--hero">

                        {
                            admin.map((admin) => (
                                <div className={"table"}>
                                    <h3 style={{
                                        textAlign:"center"
                                    }}>Столик №{admin.table}</h3>
                                    <h3 style={{
                                        textAlign:"center"
                                    }}>Дата :{admin.time_created.slice(0,10)}</h3>
                                    <h3 style={{
                                        textAlign:"center"
                                    }}>Время :{admin.time_created.slice(10,20)}</h3>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Название</th>
                                            <th>Цена</th>
                                            <th>Количество</th>
                                            <th>Итого</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{orders.map(el => el.map(a => {
                                                return <tr>
                                                    {a.name_ru}
                                                </tr>
                                            }))}</td>
                                            <td>{orders.map(el => el.map(a => <tr>{a.price}</tr>))}</td>
                                            <td>{quantity}</td>
                                            <td>{}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        <p>{admin.is_takeaway ? "С собой" : "Здесь"}</p>
                                        <p>{admin.payment ? "Терминал" : "Наличка"}</p>
                                        <h4>Общая сумма : {admin.total_price}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;