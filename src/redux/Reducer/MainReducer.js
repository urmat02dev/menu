import {
  DELETE, DELETE_BASKET,
  GET_BASKET,
  MINUS,
  MODAL, MODAL_MINUS,
  MODAL_PLUS,
  PLUS, PODCAST,
  SEARCH
} from "./ActionTypes";
import basket from "../../components/basket/Basket";
import modal from "../../components/modal/Modal";
import search from "../../components/main-page/search/Search";

const initialState ={
  foods:[],
  basket:JSON.parse(localStorage.getItem("basket")) || [],
  modal:[],
  result:[],
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
    case DELETE_BASKET : {
     return {...state,basket: [...action.payload]}
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
        return {...state, basket: [...state.basket, {...action.payload, quantity: 1 }]}

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
    case PODCAST:{
      return {
        ...state, result: state.foods.filter(el => el.title.include(search))
      }
    }
    default :
      return state
  }
}