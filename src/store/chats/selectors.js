export const getChats = (state) => state.chats.chats || [];
export const getChatById = (idChat) => (state) => state.chats.chats.find((chat) => chat.idChat === idChat); 
export const getChatsIdArr = (state) => {
  const chatsIdArr = [];
  state.chats.chats.forEach((chat) => {
    chatsIdArr.push(chat.idChat);
  }); 
  return chatsIdArr;
};
export const getValueChat = (idChat) => (state) => {
  let myChat = state.chats.chats.find((chat) => chat.idChat === idChat);
  return myChat.value;
};
