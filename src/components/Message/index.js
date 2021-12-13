import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from '@material-ui/core';


export function Message(props) {
  const {Author, text, date} = props.message;
  return(
      
      <ListItem >
        <ListItemAvatar>
          <Avatar alt={Author.name} src={Author.avatar}/>
        </ListItemAvatar>
        <ListItemText 
          primary={Author.name}
          secondary={
            <>
            <Typography component={'span'} variant={'body2'}>
              
              {text}
            </Typography > 
            <br/>
            {date}
            </>
          }
          />
      </ListItem>
  )
}

