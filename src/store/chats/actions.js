export const ADD_CHATS_LIST = 'CHATS::ADD_CHATS_LIST';
export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const createAddChatsListActions = (chatList) => ({
  type: ADD_CHATS_LIST, 
  payload: chatList,
});

export const createAddChatActions = (chat) => ({
  type: ADD_CHAT, 
  payload: chat,
});

export const createDelChatByIdActions = (idChat) => ({
  type: DELETE_CHAT, 
  payload: idChat,
});