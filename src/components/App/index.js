import { useState } from 'react';
import { getObjectTextChats, getChats } from '../../utils/myFunc';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Chats } from "../../pages/Chats";
import { Profile } from "../../pages/Profile";

function App() {
  let chats = getChats();
  let objTextChats = getObjectTextChats(chats);
  
  const [chatsList, setChatList] = useState(chats);
  const [textChats, setTextChats] = useState(objTextChats);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/chats/:idChat?'>
          <Chats textChats={textChats} setTextChats={setTextChats}  setChats={setChatList} chats={chatsList}   />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


