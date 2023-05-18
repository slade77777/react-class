import {GET_PROFILE, LOGIN_TYPE} from "../actions/userAction";

const initialState = {
  username: '',
  password: '',
  profiles: []
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_TYPE:
      state.username = action.payload.username;
      state.password = action.payload.password;
      return state;
    case GET_PROFILE:
      state.profiles = action.payload;
      return state;
    default:
      return state;
  }
}
