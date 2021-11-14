import './App.css';
import {Message} from './components/Message';

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Alexander',
      avatarUrl: 'https://placekitten.com/g/500/500',
    },
  };
  return (
    <div className="App">
      <header className="App-header">
      <Message
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      </header>
    </div>
  );
}

export default App;
