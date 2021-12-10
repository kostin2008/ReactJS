import {ADD_CHATS_LIST, ADD_CHAT, DELETE_CHAT} from './actions';
import { createChats } from '../../entities/chats';

const chatList = createChats();

export const initState = {
  chats: [...chatList],
}

export const chatsReducer = (state = initState, action) => {
  switch (action?.type) {
    case ADD_CHATS_LIST : {
      return {
        chats: [...action.payload],
      }
    }
    case ADD_CHAT : {
      return {
        chats: [...state.chats, action.payload]
      }
    }
    case DELETE_CHAT : {
      return {
        
        chats: [
          ...state.chats.filter((chat) => chat.idChat !== action.payload)
        ]
      }
    }

    default: {
      return state;
    }

  }
}

