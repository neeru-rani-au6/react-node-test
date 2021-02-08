import { REGISTER, LOGIN } from "../type";
import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3000/users/register",
      data: user,
    });
    dispatch({
      type: REGISTER,
      payload: {
        error: null,
        info: data,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER,
      payload: {
        error: error.response.data,
      },
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3000/users/login",
      data: {
        email: user.email,
        password: user.password,
      },
    });
    dispatch({
      type: LOGIN,
      payload: { error: null, user: data },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN,
      payload: {
        error: error.response.data,
        info: null,
      },
    });
  }
};
