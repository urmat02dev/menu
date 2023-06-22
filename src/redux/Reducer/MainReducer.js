import {
  ADD,
  DELETE, EMPTY_BASKET,
  GET_BASKET, GET_CHECK, GET_DETAIL, GET_FOODS, GET_PARAMS,
  MINUS,
  SEARCH, TOKEN_ID,
  MODAL, MODAL_MINUS, MODAL_PLUS, MODAL_TO_BASKET, MODAL_TO_PRICE, HERE, WITH, CASH, TERMINAL, PAY, ORDER, BURGER_MENU,
} from "./ActionTypes";

const initialState ={
  foods:[],
  basket:  JSON.parse(localStorage.getItem("backend")) || [],
  modal:false,
  detail: {},
  search:"",
  burgerMenu:false,
  check:[],
  token_Id: '',
  orders: [],
  price: "",
  params:"",
  here:false,
  withT:false,
  terminal:false,
  cash:false,
}


export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS: {
      return {...state,foods: action.payload}
    }
    case ADD: {
      const found = state.detail.add.find(el => el.id === action.payload.id)
      if (found){
        return {...state, detail:{...state.detail, add:state.detail.add.filter(el => el.id !== action.payload.id)}}
      }
      else
      return {...state, detail:{...state.detail,add:[...state.detail.add,{...action.payload}]}}

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
          {...action.payload, quantity: action.payload.quantity,add:[...state.detail.add]}]}
    }
    case MODAL_TO_PRICE : {
      const total = state.detail && state.detail.add.reduce((acc,e) => {return acc + e.price},0)
      return {...state, basket: [...state.basket,
          {...action.payload, quantity: action.payload.quantity,
            price:total + action.payload.price * action.payload.quantity,
            add:[...state.detail.add]
          }]}
    }
    case GET_DETAIL : {
      return {...state, detail: {...action.payload, quantity: 1,price:action.payload.price,add:[]}}
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
      return {...state, search: action.payload}
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
    case HERE : {
      return {...state, here:action.payload}
    }
    case WITH : {
      return {...state, withT :action.payload}
    }
    case CASH : {
      return {...state, cash:action.payload}
    }
    case TERMINAL : {
      return {...state, terminal:action.payload}
    }
    case BURGER_MENU: {
      return {...state, burgerMenu: action.payload}
    }
    default :
      return state
  }
}