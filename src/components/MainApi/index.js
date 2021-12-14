import styles from './mainApi.module.scss';
import { Footer } from "../Footer";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from 'react-redux';
import { getLoadingStatus, getLoadingError, getPostsList, createAddPostsListWithThunk } from '../../store/posts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Post } from '../Post';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function MainApi() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let posts = useSelector(getPostsList);
  let loadingStatus = useSelector(getLoadingStatus);
  let error = useSelector(getLoadingError);

  const loadData = () => {
    dispatch(createAddPostsListWithThunk());
  }

  return (
    <main>
      <div className={styles.main__container}>
        <h2>Посты пользователей</h2>
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={loadData}>Загрузить посты пользователей</Button>
        </div>
        <div className={styles.postsList}>
          {
            loadingStatus && <div className={styles.progress_container}><CircularProgress/></div>

          }
          {
            error && <div className={styles.error_container}>{error}</div>
          }
          {
            !loadingStatus && posts.map(({id, title, body }) => <Post key={id} title={title} body={body}/>)
          }
        </div>
      </div>
      <Footer />
    </main>
  )
}