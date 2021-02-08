import { REGISTER, LOGIN } from "../type";
const initalstate = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  info: null,
  error: null,
};

const userReducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      const newState = Object.assign(state, payload);
      return newState;
    case LOGIN:
      if (payload.user) {
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("isAuth", true);
      }
      return Object.assign(state, payload);
    default:
      return state;
  }
};
export default userReducer;
