export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const TOGGLE_SHOW_NAME_ACTION = 'PROFILE::TOGGLE_SHOW_NAME_ACTION';

export const createChangeName = (name) => {
  if (name !== '') {
    return {
      type: CHANGE_NAME,
      payload: name,
    }
  }
  return {type: ''};
  
}

export const createToggleShowAction = () => ({
 type: TOGGLE_SHOW_NAME_ACTION,
})