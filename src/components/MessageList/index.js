import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect, useCallback } from 'react';
import { scrollFunc, generateTime } from '../../utils/myFunc';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessagesByIdChat, createAddMessageChat } from '../../store/messages';
import faker from 'faker';
import avatarRobot from '../../asset/avatarRobot.png';



export function MessageList() {

  const { idChat } = useParams();

  const messageList = useSelector(getMessagesByIdChat(idChat));
  const dispatch = useDispatch();

  useEffect(() => {
    scrollFunc();
  }, [messageList])



  const asyncAnswer = useCallback((time) => {
    return setTimeout(() => {
      dispatch(createAddMessageChat({
        id: faker.datatype.uuid(),
        Author: {
          name: 'Robot',
          id: 9999999,
          avatar: avatarRobot
        },
        text: `Привет, ${messageList[messageList.length - 1].Author.name}! Пожалуйста, подождите ответа оператора!`,
        date: new Date()
      }, idChat));
    }, time)
  }, [messageList, dispatch, idChat]);


  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author.name !== "Robot") {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])
  

  return (
      
      <div className={styles.messageField__field}>
        { messageList !== undefined ? messageList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>

  )
}