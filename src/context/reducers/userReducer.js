import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  LOAD_USERS,
  USER_DETAILS,
  ADD_COMMENT,
  GET_COMMENTS,
} from '../actionsTypes';

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { isAuthenticated: true, user: payload };
    case LOGOUT_USER:
      return { isAuthenticated: false, user: {} };
    case LOAD_USERS:
      return { ...state, users: payload };
    case USER_DETAILS:
      return { ...state, user: payload };
    case ADD_COMMENT:
      return { ...state };
    case GET_COMMENTS:
      console.info('GET_COMMENTS payload', payload);
      return { ...state, user: { ...state.user, comments: payload } };
    default:
      throw new Error();
  }
};
export default userReducer;
