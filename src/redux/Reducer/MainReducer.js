import {GET_BASKET} from "./ActionTypes";

const initialState ={
  foods:[],
  basket:[],
}
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET : {
      return {...state, basket: action.payload}

    }
    default :
      return state
  }
}