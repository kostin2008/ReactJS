import { connect } from 'react-redux';
import { createChangeName, createToggleShowAction, getProfileSelector} from '../store/profile';

const mapStateToProps = (state) => {
  return getProfileSelector(state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) => dispatch(createChangeName(newName)),
    setShowName: () => dispatch(createToggleShowAction()),
  }
  
};


export const profileConnect = connect(mapStateToProps, mapDispatchToProps);

