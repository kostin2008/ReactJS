import { ADD_MESSAGES_LIST, ADD_MESSAGE_CHAT, DELETE_MESSAGES_CHAT } from './actions';
import { createMessagesList } from '../../entities/messagesList';

const chatList = createMessagesList();

export const initState = {
  messagesList: {...chatList},
}


export const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGES_LIST : {
      return {
        messagesList: {
          ...action.payload,
        }
      }
    }
    case ADD_MESSAGE_CHAT : {
      if (state.messagesList.hasOwnProperty(action.payload.idChat)) {
        return {
          messagesList: {
            ...state.messagesList, 
            [action.payload.idChat]: [...state.messagesList[action.payload.idChat], action.payload.message] 
          }
        }
      } else {
        return {
          messagesList: {
            ...state.messagesList, 
            [action.payload.idChat]: [action.payload.message] 
          }
        }
      }
    }
    case DELETE_MESSAGES_CHAT : {
      const newMessagesList = {};
      Object.assign(newMessagesList, state.messagesList);
      delete newMessagesList[action.payload];
      return {
        messagesList: {
          ...newMessagesList,
        }
      }
    }

    default: {
      return state;
    }

  }
}