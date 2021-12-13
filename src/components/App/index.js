import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Chats } from "../../pages/Chats";
import { Profile } from "../../pages/Profile";
import { ApiTest } from "../../pages/ApiTest";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/chats/:idChat?'>
          <Chats/>
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/api_test'>
          <ApiTest />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;


