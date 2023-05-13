import {DELETE, GET_BASKET, MINUS, MODAL} from "./ActionTypes";

export function getBasket(el) {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = [...basket, {...el}]
    localStorage.setItem("basket",JSON.stringify(basket))
    return {type:GET_BASKET,payload:el}
}


export const  addPlus = (el) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    let foundProduct = basket.find(e => e.id === el.id )
    if (foundProduct){
        basket = basket.map(e => e.id === el.id ? {...e, quantity: e.quantity + 1}: e)
    }else {
        basket = [...basket, {...el, quantity: 1}]
    }
    localStorage.setItem("basket",JSON.stringify(basket))
    return {type:GET_BASKET, payload: el}
}
export const getDelete = (el) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.filter(e => e.id !== el.id)
    localStorage.setItem("basket",JSON.stringify(basket))
    return {type: DELETE, payload: el}

}
export const minusDelete = (el) =>{
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.map(e => {
        if (e.quantity > 1) {
            return {...e, quantity: e.quantity - 1}
        }else return e
    })
    localStorage.setItem("basket",JSON.stringify(basket))
    return  {type: MINUS, payload: el}
}


