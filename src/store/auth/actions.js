import firebase from "firebase";

export const SIGN_IN_UP = 'AUTH::SIGN_IN_UP';
export const LOG_OUT = 'AUTH::LOG_OUT';
export const SET_ERROR = 'AUTH::SET_ERROR';

export const createSignInUP = () => ({
  type: SIGN_IN_UP,
});

export const createLogOut = () => ({
  type: LOG_OUT,
});

export const createSetError = (errorMessage) => ({
  type: SET_ERROR,
  payload: errorMessage,
});

export const createSignInWithThunk = (email, password) => async (dispatch) => {
  dispatch(createSetError(""));
  
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    
  } catch (error) {
    dispatch(createSetError(error.message));
  }
};

export const createSignUpWithThunk = (email, password) => async (dispatch) => {
  
  dispatch(createSetError(""));

  try {
    
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    
  } catch (error) {
    dispatch(createSetError(error.message));
    
  }
};