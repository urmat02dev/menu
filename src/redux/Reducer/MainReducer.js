import {
  DELETE,
  GET_BASKET,
  MINUS,
  MODAL, MODAL_MINUS,
  MODAL_PLUS,
  PLUS,
  SEARCH
} from "./ActionTypes";
import basket from "../../components/basket/Basket";
import modal from "../../components/modal/Modal";


const initialState ={
  foods:[],
  basket:JSON.parse(localStorage.getItem("basket")) || [],
  modal:{},
  search:"",
}
console.log()
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET : {
      const foundProduct = state.basket.find(el => el.id === action.payload.id)
      if (foundProduct) {
        return{...state, basket: state.basket.map(el => el.id === foundProduct.id ?
            {...el, quantity: el.quantity + 1} : el)}
      } else {
        return {...state, basket: [...state.basket, {...action.payload, quantity: 1 }]}
      }
    }
    case PLUS : {
      return{...state, basket: state.basket.map(el => el.id === action.payload ?
          {...el,quantity:el.quantity+1} : el)}
    }
    case MINUS : {
      return{...state, basket: state.basket.map(el => {
          if (el.id === action.payload.id) {
            if (el.quantity > 1) {
              return {...el, quantity: el.quantity - 1}
            } else return el
          } else return el
        })
      }
    }
    case MODAL : {
      const foundProduct = state.basket.find(el => el.id === action.payload.id)
      if (foundProduct) {
        return{...state, modal: {...modal, quantity: modal.quantity + 1}}
      } else {
        return {...state, modal: {...action.payload, quantity: 1 }}
      }
    }
    case SEARCH : {
      return {...state,
        search: action.payload}
    }
    case DELETE : {
      return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
    }
    case MODAL_MINUS: {
      return {...state, modal: state.modal.quantity - 1}
    }
    case MODAL_PLUS:{
      return {...state, modal: {...state.modal.quantity + 1}}
    }
    default :
      return state
  }
}