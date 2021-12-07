import styles from './mainHome.module.scss';
import { Footer } from "../Footer";

export function MainHome() {
  return (
    <main>
      <p className={styles.main__text}>Приветствую, уважаемый пользователь, на главной странице нашей социальной сети.</p>
      <Footer/>
    </main>
  )
}