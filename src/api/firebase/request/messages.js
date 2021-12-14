import { db } from '../';

export const messagesRef = db.ref('messages');

export const messagesApi = {
  createMessage: (idChat, message) => {
    return messagesRef.push({idChat, ...message});
  },
  createChatInMessagesList: (idChat) => {
    return messagesRef.push(idChat);
  }, 
  deleteChatInMessagesList: (arrMessagesChatId) => {
    const deleteMessages = {};
    arrMessagesChatId.forEach((item) => {
      deleteMessages[item] = null;
    } )
    return messagesRef.update({...deleteMessages});
  }
}