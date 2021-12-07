import { useRef, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import faker  from 'faker';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createChangeValueChat, getValuesByIdChat, createZeroChatValue } from '../../store/values';
import {  createAddMessageWithThunk } from '../../store/messages';
import { getFormatDate } from '../../utils/myFunc';

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


export function InputField() {

  const { idChat } = useParams();

  let value = useSelector(getValuesByIdChat(idChat));
  
  
  let dispatch = useDispatch();
  

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [value]);

  const classes = useStyles();

  function keyDown(e) {
    if (e.keyCode === 13) {
      newAddMessage(e);
    }

  }


  const newChangeValue = (e) => {
    dispatch(createChangeValueChat(idChat, e.target.value));
  }

  const newAddMessage = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    const message = {};
   
    message.id = faker.datatype.uuid();
    message.date = getFormatDate(new Date());
    message.Author = {
      name: faker.name.firstName(),
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
    };
    message.text = value;


    dispatch(createAddMessageWithThunk(message, idChat));
    //dispatch(createAddMessageChat(message, idChat));
    dispatch(createZeroChatValue(idChat));
  }

  return (
    <form className={classes.root} onSubmit={newAddMessage}>
      <TextField inputRef={inputRef} variant="filled" color={'primary'} autoFocus={true} value={value} onChange={newChangeValue} onKeyDown={keyDown} />
      <Button type="submit" variant="contained" color="primary">Отправить сообщение</Button>
    </form>
  )
}
