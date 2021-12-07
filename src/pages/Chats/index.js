import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MainNoChat } from "../../components/MainNoChat";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getChatsIdArr } from '../../store/chats';


export function Chats() {
  const { idChat } = useParams();
  const chats = useSelector(getChatsIdArr);
  
  
  if (!idChat || chats.find((chat) => chat === idChat) === undefined) {
    return (
      <>
      <Header />
      <MainNoChat/>
      </>
    )
  }
  return (
    <>
      <Header />
      <Main />
    </>
  )
}