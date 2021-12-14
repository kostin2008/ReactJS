import avatarRobot from '../../asset/avatarRobot.png';
import { generateTime, getFormatDate } from '../../utils/myFunc';
import { messagesRef, messagesApi } from '../../api/firebase/request';

export const ADD_MESSAGES_LIST = 'MESSAGES::ADD_MESSAGES_LIST';

export const createAddMessagesListActions = (messagesList) => ({
  type: ADD_MESSAGES_LIST, 
  payload: messagesList, 
});

export const createAddMessageWithThunk = (message, idChat) => (dispatch) => {
  messagesApi.createMessage(idChat, message);
  
  if (message.Author.name !== 'Robot' ) {
    let time = generateTime();
    const messgesRobot = {
      Author: {
        name: 'Robot',
        id: 9999999,
        avatar: avatarRobot
      },
      text: `Привет, ${message.Author.name}! Пожалуйста, подождите ответа оператора!`,
      date: getFormatDate(new Date()),
    }
    setTimeout(() => {
      messagesApi.createMessage(idChat, messgesRobot);
      
    }, time)
  }
} 

export const getPayloadMessagesList = (snapshot) => {
  const messagesList = [];
  
  snapshot.forEach((value) => {
    
    messagesList.push({id: value.key, ...value.val()});
  })
  return messagesList;
}

export const initMessagesList = () => (dispatch) => {
  messagesRef.on('value', (snapshot) => {
    dispatch(createAddMessagesListActions(getPayloadMessagesList(snapshot)));
  });
  messagesRef.on('child_added', (snapshot) => {
    dispatch(createAddMessagesListActions(getPayloadMessagesList(snapshot)));
  });
  messagesRef.on('child_removed', (snapshot) => {
    dispatch(createAddMessagesListActions(getPayloadMessagesList(snapshot)));
  });
  messagesRef.on('child_changed', (snapshot) => {
    dispatch(createAddMessagesListActions(getPayloadMessagesList(snapshot)));
  });
}



