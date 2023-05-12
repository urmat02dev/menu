import {
  DELETE, EMPTY,
  GET_BASKET,
  MINUS,
  MODAL,
  PLUS, PODCAST,
  SEARCH
} from "./ActionTypes";
import search from "../../components/main-page/search/Search";

const initialState ={
  foods:[],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  modal:false,
  result:[],
  search:"",
}


export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET : {
      const basketLocal = JSON.parse(localStorage.getItem("basket"))
      function getFound(el) {
        if (basketLocal){
          return  basketLocal.find(e => e.id)
        }
        else if(state.basket){
          return  el.find(e => e.id === el.id)
        }
      }

      console.log(getFound())


      if (getFound()) {
        return{...state, basket: state.basket.map(el => el.id === getFound(el) ?
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
        return { modal: action.payload}

    }
    case SEARCH : {
      return {...state,
        search: action.payload}
    }
    case DELETE : {
      return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
    }
    case EMPTY : {
      return {...state, basket: state.basket.pop()}
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