import { ADD_CHAT, DELETE_CHAT} from './actions';

export const initState = {
  chats: [],
}

export const chatsReducer = (state = initState, action) => {
  switch (action.type) {
    
    case ADD_CHAT : {
      return {
        chats: [...action.payload]
      }
    }
    case DELETE_CHAT : {
      return {
        
        chats: [...action.payload]
      }
    }

    default: {
      return state;
    }

  }
}

