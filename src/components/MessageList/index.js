import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect } from 'react';
import { scrollFunc } from '../../utils/myFunc';

export function MessageList(props) {

  useEffect(() => {
    scrollFunc();
  }, [props.messageList]);

  return ( 
      <div className={styles.messageField__field}>
        { props.messageList !== undefined ? props.messageList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>
  )
}