import styles from './profileContent.module.scss';
import { Footer } from "../Footer";
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createToggleShowAction } from '../../store/profile/actions';

export function ProfileContent(props) {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(createToggleShowAction());
  }, [dispatch]);
  return (
    <main>
      <p className={styles.show_name_wrapper}>
        Ваше имя: <span className={styles.show_name_name}> {showName && name} </span>
        <br/>
        <label className={styles.show_name_label}>
          <span className={styles.show_name_text}>Отобразить свое имя </span>
          <input 
            type='checkbox'
            checked={showName}
            value={showName}
            onChange={setShowName}
          
          />
        </label>
      </p>
      <p className={styles.profile__text}>Пожалуйста заполните свой профиль!!!</p>
      <Footer />
    </main>
  )
}