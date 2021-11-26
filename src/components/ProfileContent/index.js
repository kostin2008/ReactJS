import styles from './profileContent.module.scss';
import { Footer } from "../Footer";

export function ProfileContent(props) {
  return (
    <main>
      <p className={styles.profile__text}>Пожалуйста заполните свой профиль!!!</p>
      <Footer/>
    </main>
  )
}