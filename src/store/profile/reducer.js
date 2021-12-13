import { TOGGLE_SHOW_NAME_ACTION, CHANGE_NAME } from './actions';

const userInitialState = {
  showName: false,
  name: "Guest",
}

export const profileReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME_ACTION : {
      return {
        ...state,
        showName: !state.showName,
      }
    }
    case CHANGE_NAME : {
      return {
        ...state, 
        name: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}