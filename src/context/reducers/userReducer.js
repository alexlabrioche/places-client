import { SET_CURRENT_USER, LOGOUT_USER, LOAD_USERS, ADD_PLACE, GET_USER } from '../actionsTypes';

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { isAuthenticated: true, user: payload };
    case LOGOUT_USER:
      return { isAuthenticated: false, user: {} };
    case LOAD_USERS:
      return { ...state, users: payload };
    case GET_USER:
      return { ...state, user: payload };
    case ADD_PLACE:
      return { ...state, user: { ...state.user, user: payload } };
    default:
      throw new Error();
  }
};
export default userReducer;
