import { ChatListContainer } from '../../containers/ChatListContainer';
import styles from './mainNoChat.module.scss';


export function MainNoChat() {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatListContainer />
        </div>
        <div className={styles.messageField} id="messageField">
          <p className={styles.messageField__text}>Выберите чат</p>
        </div>
      </div>


    </main>
  )
}
