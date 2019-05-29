import initialState from '../../initialState';
import {AppActionsConstants} from './constants.js';

const AppReducer = (state = initialState.app, action) => {
  console.log('AppReducerState=', state);
  console.log('RECEIVED ACTION:', action);
  switch (action.type){
    case AppActionsConstants.UPDATE_TAG:
      return state.set('tag', action.payload.tag);
    default: //otherwise state is lost!
      return state;
  }
};

export default AppReducer
