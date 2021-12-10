import { initState, createAddChatActions, createDelChatByIdActions, createAddChatsListActions, ADD_CHATS_LIST, getChatById } from '../index';
import { chatsReducer } from '../reducer';
import faker from 'faker';
import { useSelector } from 'react-redux';

describe('chatsReducer', () => {

  it('вызов редьюсера без экшена вернет initState', () => {

    const result = chatsReducer();

    expect(result).toEqual(initState);
  })
  it('чат добавляется в конец списка', () => {

    const chat = {};
    chat.name = "Speak to bot";
    chat.avatar = faker.image.avatar();
    chat.idChat = faker.datatype.uuid();


    const result = chatsReducer(undefined, createAddChatActions(chat));
    const result1 = result.chats[result.chats.length - 1];

    expect(result1).toEqual({...chat});

    
  })
  it('чат удаляется из списка', () => {
    const oneChat = {
      name: 'oneChat',
      avatar: 'none',
      idChat: 1111
    };
    const twoChat = {
      name: 'twoChat',
      avatar: 'none',
      idChat: 222
    }
    const result = chatsReducer({chats: [oneChat, twoChat]}, createDelChatByIdActions(222));

    expect(result).toEqual({chats: [oneChat]});

  })
  it("тестируем action createAddChatsListActions на соответствие возвращаямого объекта с ключами 'type', и 'payload' введенным данным", () => {
    const anyChat = {
      name: 'anyChat',
      avatar: 'none',
      idChat: 777
    }
    const result = createAddChatsListActions([anyChat]);

    expect(result).toEqual({type: ADD_CHATS_LIST, payload: [anyChat]});
  })
})