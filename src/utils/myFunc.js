import faker from 'faker';
/**
 * 
 * @param {number} maxLimit 
 * @returns { number } возвращает целое число от 0 до (maxLimit - 1 ) в случайном порядке
 */
export const generateTime = (maxLimit = 2001) => Math.floor(Math.random() * maxLimit);

/**
 * 
 * @param {Date (object)} date 
 * @returns {string} возвращает строку даты в формате: 15:16:16 23.07.2021
 */
export const getFormatDate = (date) => {
  let mounth = getTwoNumber(date.getMonth() + 1); 
  let hour = getTwoNumber(date.getHours()) ;
  let minute = getTwoNumber(date.getMinutes());
  let second = getTwoNumber(date.getSeconds());
  let day = getTwoNumber(date.getDate());
  
  return `${hour}:${minute}:${second} ${day}.${mounth}.${date.getFullYear()}`;

  function getTwoNumber(number) {
    let string = number + '';
    if (string.length === 1) {
      string = '0' + string;
    }
    return string;
  }
}

/**
 * Скролит чат в нижнюю экрана на последнее сообщение
 */
export const scrollFunc = () => {
  let scrollElement = document.getElementById('messageField');
  scrollElement.scrollTop = scrollElement.scrollHeight;
}

/**
 * 
 * @returns (object) возвращает список чатов
 */
export function getChats() {
  const initChats = {};
  let countChats = Math.ceil((Math.random() + 1) * 3);
  for (let i = 0; i < countChats; i++) {
    let id = faker.datatype.uuid();
    initChats[id] = {
      name: faker.random.word(),
      messages: getMessages(),
    };
  }
  return initChats;
}

/**
 * 
 * @returns (array) возвращает массив сообщений
 */
export function getMessages() {
  let messages = [];
  const countMessages = Math.ceil((Math.random() + 1) * 5);
  for (let i = 0; i < countMessages; i++) {
    messages.push(getMessage());
  }
  return messages;
}

/**
 * 
 * @returns (object) возвращает объект сообщения
 */
function  getMessage() {
  let countWords = + Math.ceil((Math.random() + 1) * 4);
  let text = faker.random.words(countWords);
  const Author = {};
  Author.name = faker.name.firstName();
  Author.id = faker.datatype.uuid();
  Author.avatar = faker.image.avatar();
  let id = faker.datatype.uuid();
  let date = faker.date.past();
  return {
    text,
    Author,
    id,
    date,
  } 
}

/**
 * 
 * @param {object} chat 
 * @returns возвращает массив с ключами объекта chat
 */

export function getObjectTextChats(chat) {
  const arrChat = Object.keys(chat);
  const objTextChat = {};
  for (let i = 0; i < arrChat.length; i++) {
    objTextChat[arrChat[i]] = '';
  }
  return objTextChat;
}


/**
 * 
 * @returns (array) возвращает массив объектов чатов 
 */
 export function getChatsRedux() {
  const initChats = {};
  let countChats = Math.ceil((Math.random() + 1) * 3);
  for (let i = 0; i < countChats; i++) {
    let id = faker.datatype.uuid();
    initChats[id] = {
      name: faker.random.word(),
      messages: getMessages(),
    };
  }
  return initChats;
}