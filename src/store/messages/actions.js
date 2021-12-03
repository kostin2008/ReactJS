export const ADD_MESSAGES_LIST = 'MESSAGES::ADD_MESSAGES_LIST';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGES_CHAT = 'MESSAGES::DELETE_MESSAGES_CHAT';


export const createAddMessagesListActions = (messagesList) => ({
  type: ADD_MESSAGES_LIST, 
  payload: messagesList,
});

export const createAddMessageChat = (message, idChat) => ({
  type: ADD_MESSAGE_CHAT, 
  payload: {
    message,
    idChat,
  }
});

export const createDeleteMessagesChat = (idChat) => ({
  type: DELETE_MESSAGES_CHAT,
  payload: idChat,
});