import { List, ListItem, ListItemText} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './chatList.module.scss';

export function ChatList(props) {
  
  const arrChatId = Object.keys(props.chats);

  return (
    <List >
      {
        arrChatId.map((item) => (
        <NavLink className={styles.link} activeClassName={styles.activeLink} to={`/chats/${item}`} key={item}>
          <ListItem >
            <ListItemText primary={props.chats[item].name} />
          </ListItem>
        </NavLink>))
      }
    </List>
  )
}


