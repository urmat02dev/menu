import {
  CARD_ID,
  DELETE,
  GET_BASKET, GET_CHECK, GET_DETAIL, GET_FOODS, GET_PARAMS,
  MINUS,
  MODAL, MODAL_MINUS, MODAL_PLUS, MODAL_TO_BASKET,
  SEARCH
} from "./ActionTypes";

const initialState ={
  foods:[],
  basket:  JSON.parse(localStorage.getItem("backend"))|| [],
  modal:false,
  detail: JSON.parse(localStorage.getItem("back"))|| {},
  search:"",
  cardId:"",
  element:{},
  check:[]


}


export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS: {
      return {...state,foods: action.payload}
    }
    case CARD_ID: {
      return {...state, cardId: action.payload}
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
    case MODAL_TO_BASKET : {
      return {...state, basket: [...state.basket, {...action.payload, quantity: action.payload.quantity}]}
    }
    case GET_DETAIL : {
      return {...state, detail: {...action.payload,quantity: 1}}
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
    default :
      return state
  }
}