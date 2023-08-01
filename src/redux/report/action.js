import api from '../../utils/api';

const ActionType = {
  GET_ALL_REPORT: 'GET_ALL_REPORT',
};

const getAllReport = report => ({
  type: ActionType.GET_ALL_REPORT,
  payload: { report },
});

const asyncGetAllReport = () => async dispatch => {
  try {
    const report = await api.seeAllReport();
    console.log(report);
    dispatch(getAllReport(report));
  } catch (error) {
    console.log(error);
  }
};

export { ActionType, asyncGetAllReport };
