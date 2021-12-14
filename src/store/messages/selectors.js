export const getMessagesList = (state) => state.messages.messagesList || [];
export const getMessagesByIdChat = (idChat) => (state) => {
  const list = state.messages.messagesList || []; 
  const listChat = list.filter((item) => item.idChat === idChat);
  return listChat;
};
