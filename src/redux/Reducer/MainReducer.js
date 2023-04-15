import {GET_BASKET, GET_MODAL, MODAL} from "./ActionTypes";
import modal from "../../components/modal/Modal";

const initialState ={
  foods:[],
  basket:[],
  modal:{},
  modalWindow:false
}
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET : {
      return {...state, basket: action.payload}

    }
    case MODAL :{
      return {...state, modal: action.payload}
    }
    case GET_MODAL :{
      return {...state, modalWindow: action.payload}
    }
    default :
      return state
  }
}