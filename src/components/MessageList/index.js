import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect } from 'react';
import { scrollFunc} from '../../utils/myFunc';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessagesByIdChat} from '../../store/messages';


export function MessageList( ) {

  const { idChat } = useParams();
  
  const mesList = useSelector(getMessagesByIdChat(idChat));
  
  useEffect(() => {
    scrollFunc();
  }, [mesList])

  return (
      <div className={styles.messageField__field}>
        { mesList !== null ? mesList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>
  )
}