import { postsApi } from '../../api';

export const ADD_POSTS_LIST = 'POSTS::ADD_POSTS_LIST';
export const LOAD_POSTS_LIST = 'POSTS::LOAD_POSTS_LIST';
export const ERROR_LOAD_POSTS_LIST = 'POSTS::ERROR_LOAD_POSTS_LIST';


export const createAddPostsList = (postsList) => ({
  type: ADD_POSTS_LIST,
  payload: postsList,
});

export const createLoadPostsList = () => ({
  type: LOAD_POSTS_LIST,
});

export const createErrorLoadPostList = (error) => ({
  type: ERROR_LOAD_POSTS_LIST,
  payload: error,
});

export const createAddPostsListWithThunk = () => (dispatch) => {
  dispatch(createLoadPostsList());
  const request = async () => {
    const result = await postsApi.getPosts();
    if (result[0] === null && Array.isArray(result[1])) {
      dispatch(createAddPostsList(result[1]));
    }
    if (result[0] !== null) {
      dispatch(createErrorLoadPostList(result[0]));
    }
    
  }
  request();
  
}

