import { SIGN_IN_UP, LOG_OUT, SET_ERROR } from './actions';

export const initState = {
  auth: false,
  error: '',
}

export const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SIGN_IN_UP : {
      return {
        ...state,
        auth: true,
      }
    }
    case SET_ERROR : {
      return {
        ...state,
        error: action.payload,
      }
    }
    case LOG_OUT : {
      return {
        ...state,
        auth: false
      }
    }
    default : {
      return state;
    }
  }
}


