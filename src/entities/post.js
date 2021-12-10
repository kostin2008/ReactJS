import faker from 'faker';
/**
 * @param userId {number}
 * @param id {number}
 * @param title {string}
 * @param body {string}
 * */
 export const createChat = () => ({
  userId: Math.floor(Math.random() * 100),
  id: Math.floor(Math.random() * 1000),
  title: faker.lorem.words(),
  body: faker.lorem.paragraph(),
})