import { MessageList } from '../MessageList';
import { InputField } from '../InputField';
import styles from './main.module.scss';
import { ChatListContainer } from '../../containers/ChatListContainer';


export function Main() {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatListContainer/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageList />
        </div>
      </div>

      <div className={styles.inputField}>
        <InputField />
      </div>
    </main>
  )
}