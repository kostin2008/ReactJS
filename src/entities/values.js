/**
 * @param number {number} количество чатов (условно 5)
 *
 * @returns valueObj {object} возвращает объект значений поля ввода для каждого чата с ключом по id чата
 * 
 * */
 export const createValues = (number = 5) => {
  const valueObj = {};
  for (let i = 0; i < number; i++) {
    valueObj[i] = '';
  }
  return valueObj;
};