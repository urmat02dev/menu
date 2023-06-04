import {
  ADD, ADD_DELETE,
  ADD_ID,
  CARD_ID,
  DELETE, EMPTY_BASKET,
  GET_BASKET, GET_CHECK, GET_DETAIL, GET_FOODS, GET_PARAMS,
  MINUS,
  MODAL, MODAL_MINUS, MODAL_PLUS, MODAL_TO_BASKET,
  SEARCH, TOKEN_ID
  MODAL, MODAL_MINUS, MODAL_PLUS, MODAL_TO_BASKET, MODAL_TO_PRICE,
  SEARCH
} from "./ActionTypes";
import basket from "../../components/basket/Basket";

const initialState ={
  foods:[],
  basket:  JSON.parse(localStorage.getItem("backend")) || [],
  modal:false,
  detail: {},
  search:"",
  add:[],
  element:{},
  check:[],
  token_Id: ''
  orders: [],
  price: "",
  params:""

}


export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS: {
      return {...state,foods: action.payload}
    }
    case ADD: {
      const found = state.add.find(el => el.id === action.payload.id)
      if (found){
        return {...state, add: state.add.filter(el => el.id !== action.payload.id)}
      }
      else return {...state, add:[...state.add,{...action.payload}]}

    }
    case ADD_DELETE : {
      return {...state, add:action.payload }
    }
    case GET_CHECK: {
      return {...state, check: action.payload}
    }
    case GET_BASKET : {
      const found = state.basket.find(el => el.id === action.payload.id)
      if (found){
        return {...state, basket: state.basket.map( el => el.id === found.id ? {...el,quantity:el.quantity + 1} : el)}
      }else{
        return {...state, basket: [...state.basket, {...action.payload,quantity: 1}]} }

    }
    case EMPTY_BASKET: {
      return {...state, basket:action.payload}
    }
    case MODAL_TO_BASKET : {

      return {...state, basket: [...state.basket,
          {...action.payload, quantity: action.payload.quantity,add:state.add}]}
    }
    case MODAL_TO_PRICE : {
      const total = state.add.reduce((acc,e) => {return acc + e.price},0)
      return {...state, basket: [...state.basket,
          {...action.payload, quantity: action.payload.quantity,
            price:total + action.payload.price * action.payload.quantity,

          }]}
    }
    case GET_DETAIL : {

      return {...state, detail: {...action.payload,quantity: 1,price:action.payload.price}}
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
        return {...state, modal: action.payload}

    }
    case SEARCH : {
      return {...state,
        search: action.payload}
    }
    case DELETE : {
      return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
    }
    case MODAL_PLUS : {
      return {...state,detail: {...action.payload, quantity:action.payload.quantity + 1}}
    }
    case MODAL_MINUS : {
      return {...state,detail: {...action.payload, quantity: action.payload.quantity > 1 ? action.payload.quantity - 1  : action.payload.quantity }}
    }
    case GET_PARAMS : {
      return {...state,params: action.payload}
    }
    case TOKEN_ID: {
      return {...state,token_Id: action.payload}
    }
    default :
      return state
  }
}