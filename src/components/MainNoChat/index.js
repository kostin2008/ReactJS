import { MessageList } from '../MessageList';
import { ChatList } from '../ChatList';
import styles from './mainNoChat.module.scss';
import { Footer } from "../Footer";


export function MainNoChat(props) {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatList chats={props.chats}/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageList messageList={props.messageList} addMessage={props.addMessage} />
        </div>
      </div>
      <Footer/>
    </main>
  )
}