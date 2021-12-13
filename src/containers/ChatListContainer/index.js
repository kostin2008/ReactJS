import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from '../../store/chats';
import { createDelChatByIdActions, createAddChatActions } from '../../store/chats';
import { createDeleteMessagesChat } from '../../store/messages';
import faker from 'faker';
import { ChatList } from '../../components/ChatList';


export function ChatListContainer() {

  let [chatName, setChatName] = useState('');

  const changeChatName = (e) => {
    setChatName(e.target.value);
  }

  const addChat = () => {

    if (chatName === '') {
      return;
    }
    const chat = {};
    chat.name = chatName;
    chat.avatar = faker.image.avatar();
    chat.idChat = faker.datatype.uuid();
    dispatch(createAddChatActions(chat));
    setChatName('');
  }

  const dispatch = useDispatch();

  const chats = useSelector(getChats);

  const deleteChat = (idChat) => {
    
    dispatch(createDelChatByIdActions(idChat));
  }

  const deletMessagesList = (idChat) => {
    dispatch(createDeleteMessagesChat(idChat));
  }

  return <ChatList
    chats={chats}
    chatName={chatName}
    changeChatName={changeChatName}
    addChat={addChat} deleteChat={deleteChat}
    deletMessagesList={deletMessagesList}
  />;
}