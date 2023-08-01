import { ActionType } from './action';

const allProfileReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_OWN_PROFILE:
      return action.payload.profile;
    default:
      return state || [];
  }
};

export default allProfileReducer;
