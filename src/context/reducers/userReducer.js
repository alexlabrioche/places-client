import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  LOAD_USERS,
  USER_DETAILS,
  ADD_COMMENT,
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
    default:
      throw new Error();
  }
};
export default userReducer;
