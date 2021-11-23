import { MessageList } from '../MessageList';
import { InputField } from '../InputField';
import { ChatList } from '../ChatList';
import styles from './main.module.css';


export function Main(props) {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatList/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageList messageList={props.messageList} addMessage={props.addMessage} />
        </div>
      </div>

      <div className={styles.inputField}>
        <InputField value={props.value} addMessage={props.addMessage} changeText={props.changeText} />
      </div>
    </main>
  )
}