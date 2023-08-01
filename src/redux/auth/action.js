import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  REMOVE_AUTH_USER: 'REMOVE_AUTH_USER',
  RECEIVE_REGISTER_USER: 'RECEIVE_REGISTER_USER',
};

function setAuthUserCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: { authUser },
  };
}

function removeAuthUserCreator() {
  return {
    type: ActionType.REMOVE_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUserCreator({ email, password }) {
  return async function (dispatch) {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserCreator(authUser));
    } catch (error) {
      console.error(error);
    }
  };
}

const asyncRegisterUser = user => async () => {
  try {
    await api.register(user);
  } catch (error) {
    console.log(error);
  }
};

function asyncRemoveAuthUserCreator() {
  return dispatch => {
    api.putAccessToken('');
    dispatch(removeAuthUserCreator());
  };
}

export {
  ActionType,
  setAuthUserCreator,
  asyncSetAuthUserCreator,
  asyncRemoveAuthUserCreator,
  asyncRegisterUser,
};
