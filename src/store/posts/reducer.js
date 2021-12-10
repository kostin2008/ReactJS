import { ADD_POSTS_LIST, LOAD_POSTS_LIST, ERROR_LOAD_POSTS_LIST} from './actions';

export const initState = {
  posts: [],
  error: null,
  isLoading: false,
}

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POSTS_LIST : {
      return {
        ...state,
        error: null,
        isLoading: false,
        posts: action.payload,
      }
    }
    case LOAD_POSTS_LIST : {
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    }
    case ERROR_LOAD_POSTS_LIST : {
      return {
        ...state,
        posts: [],
        isLoading: false,
        error: action.payload,
      }
    }

    default : {
      return state
    }
  }
}


