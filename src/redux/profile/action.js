import api from '../../utils/api';

const ActionType = {
  GET_OWN_PROFILE: 'GET_OWN_PROFILE',
};

const getOwnProfile = profile => ({
  type: ActionType.GET_OWN_PROFILE,
  payload: { profile },
});

const asyncGetOwnProfile = () => async dispatch => {
  try {
    const profile = await api.getOwnProfile();
    dispatch(getOwnProfile(profile));
  } catch (error) {
    console.log(error);
  }
};

export { ActionType, asyncGetOwnProfile };
