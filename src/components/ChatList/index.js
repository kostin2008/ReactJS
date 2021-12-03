import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './chatList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from '../../store/chats';
import { createDelChatByIdActions, createAddChatActions } from '../../store/chats';
import { createDeleteMessagesChat } from '../../store/messages';
import faker from 'faker';

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

export function ChatList() {

  let [chatName, setChatName ] = useState('');

  const changeChatName = (e) => {
    setChatName(e.target.value);
  }

  const addChat = () => {
    
    if (chatName === '') {
      return;
    } 
    const chat = {};
    chat.name = chatName;
    chat.avatar = faker.image.avatar();
    chat.idChat = faker.datatype.uuid();
    dispatch(createAddChatActions(chat));
    setChatName('');
  } 

  const classes = useStyles();

  const dispatch = useDispatch();

  const chats = useSelector(getChats);

  const deleteChat = (idChat) => {
    console.log();
    dispatch(createDelChatByIdActions(idChat));
  }

  const deletMessagesList = (idChat) => {
    dispatch(createDeleteMessagesChat(idChat));
  }

  return (
    <List >
      <TextField id="outlined-search" label="Создать чат" value={chatName} type="search" variant="outlined" onChange={changeChatName} className={classes.width} />
      <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={addChat}>
        +
      </Button>
      {
        chats.map((item) => (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to={`/chats/${item.idChat}`} key={item.idChat}>
            <ListItem >
              <ListItemAvatar >
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={(event) => {
                  event.preventDefault();
                  deleteChat(item.idChat);
                  deletMessagesList(item.idChat);
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


