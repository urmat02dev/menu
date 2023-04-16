import {GET_BASKET, MODAL, SEARCH} from "./ActionTypes";
import Search from "../../components/main-page/search/Search";


const initialState ={
  foods:[],
  basket:[],
  modal:{},
  search:"",
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
    case SEARCH : {
      return {...state,
        search: action.payload}
    }
    default :
      return state
  }
}