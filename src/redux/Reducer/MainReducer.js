import {
  DELETE,
  GET_BASKET, GET_DETAIL, GET_FOODS, GET_PARAMS,
  MINUS,
  MODAL, MODAL_MINUS, MODAL_PLUS, MODAL_TO_BASKET, PLUS,
  SEARCH
} from "./ActionTypes";

const initialState ={
  foods:[],
  basket: [],
  modal:false,
  detail:{},
  result:[],
  search:"",
  params:""
}


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