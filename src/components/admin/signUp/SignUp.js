import React, {useState} from 'react';
import './SignUp.scss'
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {TOKEN_ID} from "../../../redux/Reducer/ActionTypes";
import LoaderSignUp from "../../loader/LoaderSignUp";
import {BACKEND_GET_URL} from "../../starts/random";

const SignUp = () => {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("Емейл не может быть пустым")
    const [admin, setAdmin] = useState({})
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const {token_Id} = useSelector(s => s)
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleChange2 = (event) => {
        setValue2(event.target.value)
    }
    const handleKeyEnter2 = (event) => {
        if (event.key === "Enter") {
            getSignUp();
        }
    }
    // const handleInput = (e) => {
    //     switch (e.target.name){
    //         case 'email':
    //             setEmailDirty(true)
    //             break
    //     }
    // }
    const getSignUp = async () => {
        try {
            setLoader(true)
            const res = await axios.post(`${BACKEND_GET_URL}api-token-auth/`, {
                "username": value,
                "password": value2,
            })
            dispatch({type: TOKEN_ID, payload: res.data.token})
            setAdmin(res.data.token)
            setLoader(false)
            nav("/orders")
        } catch (e) {
            setError(e)
        }

    }
    return (
        <div id='sign'>
            <div className="container">
                <div className="signn">
                    <div className='sign'>
                        <div className='sign--text'>
                            <h1>Войдите в свою Админную часть</h1>
                        </div>
                        <div className='sign--input'>
                            {/*{(emailDirty && emailError) && <div className="sign--input__dirty" style={{color: "red"}}>{emailError}</div>}*/}
                            <input name='email'
                                   value={value}
                                   style={{
                                       // onBlur={e => handleInput(e)}
                                       border: error ? "2px solid red" : "1px solid black"
                                   }}
                                   onChange={(event) => handleChange(event)} type="text"
                                   placeholder='Имя пользователя'/>
                            {/*{(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}*/}
                            <input name='password'
                                   onKeyPress={handleKeyEnter2}
                                   style={{
                                       border: error ? "2px solid red" : "1px solid black"
                                   }} onChange={(event) => handleChange2(event)} type="password" placeholder='Пароль'/>
                        </div>
                        <div className="sign--btn">
                            <button onClick={() => getSignUp()}>Войти {loader ? <LoaderSignUp/> : ""}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;