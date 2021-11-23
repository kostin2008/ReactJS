import { useRef, useEffect} from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    '& .MuiTextField-root': {
      width: '85%',
      height: '100%',
    },
    '& input':{
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
  }, [props.value]);

  const classes = useStyles();

  function keyDown(e) {
    if (e.keyCode === 13) {
      props.addMessage(e);
    }
  }

  return (
    <form className={classes.root} onSubmit={props.addMessage}>
      <TextField inputRef={inputRef}  variant="filled" color={'primary'} autoFocus={true} value={props.value} onChange={props.changeText} onKeyDown={keyDown} />
      <Button type="submit" variant="contained" color="primary">Отправить сообщение</Button>
    </form>
  )
}