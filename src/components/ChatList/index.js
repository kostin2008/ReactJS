import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './chatList.module.scss';
import faker from 'faker';
import { getMessagesList } from '../../store/messages';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    height: '52px',
    fontSize: '25px'

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  width: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '130px',
  }
}));

export function ChatList({ chats, chatName, changeChatName, addChat, deleteChat, deletMessagesList }) {
  const classes = useStyles();

  
  const messagesList = useSelector(getMessagesList);
  
  const getMessagesIdByIdChat = (idChat) => {
    const arrMessagesId = [];
    const arrMessages = messagesList.filter((item) => item.idChat === idChat);
    arrMessages.forEach((item) => {
      arrMessagesId.push(item.id);
    });
    return arrMessagesId;
  };

  return (
    <List >
      <TextField id="outlined-search" label="Создать чат" value={chatName} type="search" variant="outlined" onChange={changeChatName} className={classes.width} />
      <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={addChat}>
        +
      </Button>
      {
        chats.map((item) => (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to={`/chats/${item.idChat}`} key={item.idChat || faker.datatype.uuid()}>
            <ListItem >
              <ListItemAvatar >
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={(event) => {
                  event.preventDefault();
                  deleteChat(item.id);
                  deletMessagesList(getMessagesIdByIdChat(item.idChat));
                }}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </NavLink>))
      }
    </List>
  )
}


