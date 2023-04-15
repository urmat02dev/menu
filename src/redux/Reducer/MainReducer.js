import {GET_BASKET, MODAL} from "./ActionTypes";


const initialState ={
  foods:[],
  basket:[],
  modal:{},
}
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET : {
      return {...state, basket: action.payload}
    }

    case MODAL : {
      return {...state,
      modal: action.payload}
    }
    default :
      return state
  }
}