import { useRef, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import faker  from 'faker';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',

    '& .MuiTextField-root': {
      width: '85%',
      height: '100%',

    },
    '& input': {
      padding: '5px 9px',
      fontSize: 'calc(8px + 2vh)',
      color: '#696969',
    },
    '& button': {
      width: '15%',
      height: '5vh',
      fontSize: 'calc(7px + 0.5vh)',
      borderRadius: 0,

    }
  },
}));

export function InputField(props) {
  
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [props.textChats]);

  const classes = useStyles();

  function keyDown(e) {
    if (e.keyCode === 13) {
      addMessage(e);
    }

  }
  
  function changeText(e) {
    props.setTextChats(Object.assign({}, props.textChats, {[props.idChat]: e.target.value,}));
  }

  function addMessage(e) {
    e.preventDefault();
    if (props.textChats[props.idChat] !== '') {
      props.setChats(Object.assign({}, props.chats, 
        {[props.idChat]: {name: props.chats[props.idChat].name, messages: [...props.chats[props.idChat].messages, 
        { id: faker.datatype.uuid(),
        Author: {
          name: faker.name.firstName(),
          id: faker.datatype.uuid(),
          avatar: faker.image.avatar(),
        },
        text: props.textChats[props.idChat],
        date: new Date()
      }]}}));
      props.setTextChats(Object.assign({}, props.textChats, {[props.idChat]:''}));
    }
  }

  return (
    <form className={classes.root} onSubmit={addMessage}>
      <TextField inputRef={inputRef} variant="filled" color={'primary'} autoFocus={true} value={props.textChats[props.idChat]} onChange={changeText} onKeyDown={keyDown} />
      <Button type="submit" variant="contained" color="primary">Отправить сообщение</Button>
    </form>
  )
}
