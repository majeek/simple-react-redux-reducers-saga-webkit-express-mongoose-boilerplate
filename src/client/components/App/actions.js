import { AppActionsConstants} from './constants.js';


function updateTagAction(tag) {
  return {
    type: AppActionsConstants.UPDATE_TAG,
    payload: {
      tag
    }
  }
}

let AppActions  = {
  updateTagAction
};

export default AppActions
