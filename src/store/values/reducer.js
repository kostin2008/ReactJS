import { CHANGE_VALUE, ZERO_CHAT_VALUE } from './actions';

export const initState = {
  values: {},
}

export const valuesReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VALUE : {
      return {
        values: {
          ...state.values,
          [action.payload.idChat]: action.payload.value,
        }
      }
    }
    case ZERO_CHAT_VALUE : {
      return {
        values: {
          ...state.values,
          [action.payload]: '',
        }
      }
    }
    default: {
      return state;
    }
  }
}