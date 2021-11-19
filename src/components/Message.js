import React from 'react';
import '../css/Message.css'

export function Message({message}) {
  const {Author, text} = message;
  return(
    <p className='message__text'>
      <span className={Author === "Robot" ? 'robot__text' : 'user__text'}>{Author}</span>: {text}
    </p>
  )
}