import {
  DELETE,
  GET_BASKET,
  MINUS,
  MODAL,
  SEARCH
} from "./ActionTypes";

const initialState ={
  foods:[],
  basket: [],
  modal:false,
  result:[],
  search:"",
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
        return { modal: action.payload}

    }
    case SEARCH : {
      return {...state,
        search: action.payload}
    }
    case DELETE : {
      return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
    }
    default :
      return state
  }
}