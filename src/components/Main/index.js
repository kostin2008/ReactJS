import { MessageList } from '../MessageList';
import { InputField } from '../InputField';
import { ChatList } from '../ChatList';
import styles from './main.module.scss';

export function Main(props) {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatList chats={props.chats} idChat={props.idChat}/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageList messageList={props.messageList} addMessage={props.addMessage} />
        </div>
      </div>

      <div className={styles.inputField}>
        <InputField chats={props.chats} textChats={props.textChats} setTextChats={props.setTextChats} value={props.value} setChats={props.setChats} idChat={props.idChat} addMessage={props.addMessage} changeText={props.changeText} />
      </div>
    </main>
  )
}