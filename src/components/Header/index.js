import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  
  return (
    <header>
      <p>Приветствуем вас в новой социальной сети:</p>
      <ul className={styles.menu}>
        <li className={styles.menu__list}>
          <NavLink activeClassName={styles.activeLink}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.menu__list}>
          <NavLink activeClassName={styles.activeLink}
            exact
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={styles.menu__list}>
          <NavLink activeClassName={styles.activeLink}
            
            to="/chats"
          >
            Chat
          </NavLink>
        </li>
      </ul>
    </header>
  )
}