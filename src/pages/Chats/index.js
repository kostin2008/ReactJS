import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MainNoChat } from "../../components/MainNoChat";
import { useParams } from "react-router-dom";

export function Chats(props) {
  const { idChat } = useParams();
  
  if (!idChat || props.chats[idChat] === undefined) {
    return (
      <>
      <Header />
      <MainNoChat messageList={undefined} chats={props.chats} addMessage={props.addMessage} changeText={props.changeText} />
      </>
    )
  }
  return (
    <>
      <Header />
      <Main textChats={props.textChats} setTextChats={props.setTextChats} messageList={props.chats[idChat].messages} setChats={props.setChats} chats={props.chats} idChat={idChat} addMessage={props.addMessage} changeText={props.changeText} value={props.value} />
    </>
  )
}