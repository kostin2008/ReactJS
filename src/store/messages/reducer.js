import { ADD_MESSAGES_LIST } from './actions';

export const initState = {
  messagesList: [],
}

export const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGES_LIST: {
      return {
        messagesList: [
          ...action.payload,
        ]
      }
    }
    default: {
      return state;
    }
  }
}