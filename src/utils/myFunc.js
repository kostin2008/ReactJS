
/**
 * 
 * @param {number} maxLimit 
 * @returns { number } возвращает целое число от 0 до (maxLimit - 1 ) в случайном порядке
 */
export const generateTime = (maxLimit = 5001) => Math.floor(Math.random() * maxLimit);

/**
 * 
 * @param {Date (object)} date 
 * @returns {string} возвращает строку даты в формате: 23.11.2021 10:00:00
 */
export const getDate = (date) => {
  let mounth = getTwoNumber(date.getMonth() + 1); 
  let hour = getTwoNumber(date.getHours()) ;
  let minute = getTwoNumber(date.getMinutes());
  let second = getTwoNumber(date.getSeconds());
  
  return `${date.getDate()}.${mounth}.${date.getFullYear()} ${hour}:${minute}:${second}`;

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