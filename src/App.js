import './App.css';
import { useCallback, useEffect, useState } from 'react';
import {MessageField} from './components/MessageField';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');

  const asyncAnswer = useCallback((time) => {
    return setTimeout(() => {
      setMessageList([...messageList, {Author: 'Robot', text: "Привет! Я робот!"}]);
      console.log(time);
    }, time)
  }, [messageList]);

  const generateTime = () => Math.floor(Math.random() * 3001);

  useEffect( () => {
    if(messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author === "Alex" ) {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])

  const addMessage = () => {
    if (text !== '') {
      setMessageList([...messageList, {Author: 'Alex', text}]);
      setText('');
    }
  };

  const changeText = (e) => {
    if (e.target.value !== ""){
      setText(e.target.value);
    }
  }

  return (
    <div className='App'>
      <p><b><h2>Приветствуем Вас в новой социальной сети:</h2></b></p>
      <MessageField messageList={messageList} addMessage={addMessage} changeText={changeText} value={text}/>
    </div>
  );
}

export default App;
