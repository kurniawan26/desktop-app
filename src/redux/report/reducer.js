import { ActionType } from './action';

const allReportReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_REPORT:
      return action.payload.report;
    default:
      return state || [];
  }
};

export default allReportReducer;
