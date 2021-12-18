import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getChats } from '../../store/chats';
import faker from 'faker';
import { ChatList } from '../../components/ChatList';
import { chatsApi, messagesApi } from '../../api/firebase/request';


export function ChatListContainer() {

  const chats = useSelector(getChats);
  
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

    chatsApi.createChat(chat);
    
    setChatName('');
  }

  const deleteChat = (id) => {
    chatsApi.deleteChat(id);
  }

  const deletMessagesList = (arrMessagesChatId) => {
    messagesApi.deleteChatInMessagesList(arrMessagesChatId);
  }

  return <ChatList
    chats={chats}
    chatName={chatName}
    changeChatName={changeChatName}
    addChat={addChat} deleteChat={deleteChat}
    deletMessagesList={deletMessagesList}
  />;
}