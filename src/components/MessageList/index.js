import styles from './messageField.module.css';
import { Message } from '../message';

export function MessageList(props) {
  return (
      <div className={styles.messageField__field}>
        {props.messageList.map((message) => <Message key={message.id} message={message} />)}
      </div>
  )
}