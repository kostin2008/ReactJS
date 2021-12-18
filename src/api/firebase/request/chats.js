import { db } from '../';

export const chatsRef = db.ref('chats');


export const chatsApi = {
  createChat: ({name, idChat, avatar}) => {
    return chatsRef.push({name, idChat, avatar});
  },
  deleteChat: (id) => {
    return chatsRef.child(id).remove();
  }
}


