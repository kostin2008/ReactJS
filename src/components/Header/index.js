import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { Button } from '@material-ui/core';

export function Header() {

  const logOut = () => {
    firebase.auth().signOut();
  }
  return (
    <header>
      <p className={styles.text_header}>Приветствуем вас в новой социальной сети</p>
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
        <li className={styles.menu__list}>
          <NavLink activeClassName={styles.activeLink}

            to="/api_test"
          >
            ApiTest
          </NavLink>
        </li>
      </ul>
      <div className={styles.login_block}>
        {!Boolean(firebase.auth().currentUser) &&
          <>
            <div>
              <NavLink
                activeClassName={styles.activeLink}
                to="/signin"
                exact
              >
                Sign In
              </NavLink>
            </div>
            <div>
              <NavLink
                activeClassName={styles.activeLink}
                to="/signup"
                exact
              >
                Sign Up
              </NavLink>
            </div>
          </>
        }
        {
          Boolean(firebase.auth().currentUser) &&
          <Button variant="contained" onClick={logOut}>Log Out</Button>
        }
      </div>
    </header>
  )
}