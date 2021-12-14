import { useDispatch, useSelector } from 'react-redux';
import { Routes } from '../Routes';
import { useEffect } from 'react';
import { initChats } from "../../store/chats";
import { initMessagesList } from '../../store/messages';
import { getAuthStatus } from '../../store/auth';

function App() {
  
  let auth = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initChats())
  }, [dispatch, auth]);

  useEffect(() => {
    dispatch(initMessagesList())
  }, [dispatch, auth]);

  return (
    <Routes />
  );
}

export default App;


