import faker from 'faker';
/**
 * @param name {string}
 * @param idChat {string}
 * @param avatat {string}
 * @param value {string}
 * */
 export const createChat = (idChat) => ({
  idChat,
  name: faker.random.word(),
  avatar: faker.image.avatar(),
})