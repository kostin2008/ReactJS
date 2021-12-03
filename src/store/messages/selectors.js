export const getMessagesList = (state) => state.messages.messagesList || [];
export const getMessagesByIdChat = (idChat) => (state) => state.messages.messagesList[idChat] || []; 