import { SET_CURRENT_USER, LOGOUT_USER } from '../actionsTypes';

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { isAuthenticated: true, user: payload };
    case LOGOUT_USER:
      return { isAuthenticated: false, user: payload };
    default:
      throw new Error();
  }
};
export default userReducer;
