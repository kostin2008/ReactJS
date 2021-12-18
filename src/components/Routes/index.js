import { BrowserRouter, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Chats } from "../../pages/Chats";
import { Profile } from "../../pages/Profile";
import { ApiTest } from "../../pages/ApiTest";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";
import { MainContent } from '../../components/MainContent';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSignInUP, createLogOut, getAuthStatus } from "../../store/auth";
import firebase from "firebase";
import PrivateRoute from "../../hocs/PrivateRoute";
import PublicRoute from "../../hocs/PublicRoute";



export const Routes = () => {

  const dispatch = useDispatch();
  const auth = useSelector(getAuthStatus);
  //const [auth, setAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(createSignInUP());
        //setAuth(true);
      } else {
        dispatch(createLogOut());
        //setAuth(false);
      }
    })
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute auth={auth} exact path='/' >
          <Home />
        </PublicRoute>
        <PrivateRoute auth={auth} path='/chats/:idChat?'>
          <Chats />
        </PrivateRoute>
        <PrivateRoute auth={auth} exact path='/profile'>
          <Profile />
        </PrivateRoute>
        <PublicRoute auth={auth} exact path='/api_test'>
          <ApiTest />
        </PublicRoute>
        <PublicRoute auth={auth} exact path='/signin'>
          <MainContent content={<SignIn />} />
        </PublicRoute>
        <PublicRoute auth={auth} exact path='/signup'>
          <MainContent content={<SignUp />} />
        </PublicRoute>
        <PublicRoute auth={auth} path='/'>
          <Home />
        </PublicRoute>

      </Switch>
    </BrowserRouter>
  );
}