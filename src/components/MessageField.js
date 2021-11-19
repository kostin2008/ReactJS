import '../css/MessageField.css';
import { Message } from './Message';

export function MessageField(props) {
  function keyDown(e) {
    if (e.keyCode === 13) {
      props.addMessage(e);
    }
  }

  return (
    <div className='messageField'>
      <div className='messageField__inputs'>
        <input value={props.value} onChange={props.changeText} onKeyDown={keyDown} />
        <button onClick={props.addMessage}>Отправить сообщение</button>
      </div>
      <div className='messageField__field'>
        {props.messageList.map((message, ind) => <Message key={ind + 1} message={message} />)}
      </div>
    </div>
  )
}