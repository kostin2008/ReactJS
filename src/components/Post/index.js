import { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Post = ({ body, title }) => {
  const classes = useStyles();
  let [bodyVision, setBodyVision] = useState(false);
  let [nameButton, setNameButton] = useState('Подробнее')
  const visibleBodyToggle = () => {
    setBodyVision(!bodyVision);
    setTextButton(nameButton);
  }
  const setTextButton = (text) => {
    if (text === "Подробнее") {
      setNameButton('Скрыть');
    } else {
      setNameButton('Подробнее');
    }
  }
  return (
    <div>
      <p>{title}</p>
      {bodyVision && <p>{body}</p>}
      <div className={classes.root}>
        <Button variant="contained" onClick={visibleBodyToggle}>{nameButton}</Button>
      </div>

    </div>
  )
}