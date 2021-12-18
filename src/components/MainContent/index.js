import styles from './mainContent.module.scss';
import { Footer } from "../Footer";
import { Header } from '../Header';

export function MainContent(props) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.main__content}>
          {props.content}
        </div>
        <Footer />
      </main>
    </>

  )
}