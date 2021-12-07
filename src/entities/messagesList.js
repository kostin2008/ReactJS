import { getMessages } from '../utils/myFunc';


/**
 * @param count {number} количество генерируемых чатов
 * 
 * @returns messagesList возвращает объект сообщений ключи которого id чата, а их значения - массивы сообщений
 * 
 * */
 export const createMessagesList = (number = 5) => {
  const messagesList = {};
  for (let i = 0; i < number; i++) {
    messagesList[i] = getMessages();
  }
  return messagesList;
}