/**
 * @param text {string}
 * @param Author {object} : name {string}, id {string}, avatar {string}
 * @param id {string}
 * @param date {object Date}
 * 
 * */
 export const createMessage = (text, Author, id, date) => ({
    text,
    Author,
    id,
    date,
})