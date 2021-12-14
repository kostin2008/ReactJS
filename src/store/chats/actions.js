import { chatsRef } from "../../api/firebase/request";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';


export const createAddChatActions = (chats) => ({
  type: ADD_CHAT,
  payload: chats,
});

export const createDelChatByIdActions = (chats) => ({
  type: DELETE_CHAT,
  payload: chats,
});

export const getPayload = (snapshot) => {
  const chats = [];

  snapshot.forEach((value) => {
    
    chats.push({id: value.key, ...value.val()});
  })
  
  return chats;
}

export const initChats = () => (dispatch) => {
  chatsRef.on('value', (snapshot) => {
    dispatch(createAddChatActions(getPayload(snapshot)));
  });
  chatsRef.on("child_changed", (snapshot) => {
    dispatch(createAddChatActions(getPayload(snapshot)));
  })
  chatsRef.on('child_added', (snapshot) => {
    dispatch(createAddChatActions(getPayload(snapshot)));
  });

  chatsRef.on('child_removed', (snapshot) => {
    dispatch(createDelChatByIdActions(getPayload(snapshot)));
  });

}

