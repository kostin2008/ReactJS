import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect } from 'react';
import { scrollFunc} from '../../utils/myFunc';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessagesByIdChat} from '../../store/messages';

export function MessageList( ) {

  const { idChat } = useParams();
  const messageList = useSelector(getMessagesByIdChat(idChat));

  useEffect(() => {
    scrollFunc();
  }, [messageList])

  return (
      
      <div className={styles.messageField__field}>
        { messageList !== undefined ? messageList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>

  )
}