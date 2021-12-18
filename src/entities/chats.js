import { createChat } from "./chat"

/**
 * @param count {number} количество генерируемых чатов
 * 
 * @returns chatsList возвращает массив объектов чатов (с именем, аватаркой и id чата)
 * 
 * */
 export const createChats = (number = 5) => {
  const chatsList = [];
  for (let i = 0; i < number; i++) {
    chatsList.push(createChat(i + ''));
  }
  return chatsList;
}