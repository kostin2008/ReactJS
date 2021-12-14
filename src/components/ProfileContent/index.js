import styles from './profileContent.module.scss';
import { Footer } from "../Footer";
import React, { useState } from 'react';
import { profileConnect } from '../../connects/profileConnect';


export function ProfileContentRender({name, showName, setShowName, setName }) {
  let [newName, setNewName] = useState('');
  const cangeName = (e) => {
    setNewName(e.target.value);
  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      setName(newName);
      setNewName('');
    }
  }
  
  return (
    <main>
      <div className={styles.show_name_wrapper}>
        Ваше имя: <span className={styles.show_name_name}> {showName && name} </span>
        <br />
        <label className={styles.show_name_label}>
          <span className={styles.show_name_text}>Отобразить свое имя </span>
          <input
            type='checkbox'
            checked={showName}
            value={showName}
            onChange={ setShowName }
          />
        </label><br />
        <p className={styles.paragraph_change_name}>Введите свое имя:
          <input type="text" className={styles.input_name_field} value={newName} onChange={cangeName} onKeyDown={keyDown}/>
          <button className={styles.button_name_change} onClick={() => {
            setName(newName); 
            setNewName('');
          }} >Изменить имя</button>
        </p>
      </div>
      <p className={styles.profile__text}>Пожалуйста заполните свой профиль!!!</p>
      <Footer />
    </main>
  )
}

export const ProfileContent = profileConnect(ProfileContentRender);