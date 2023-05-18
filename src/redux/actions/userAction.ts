import axios from "axios";

export const LOGIN_TYPE = "LOGIN"
export const GET_PROFILE = "GET_PROFILE"

export const login = (data: {username: string, password: string}) => {
  return {
    type: LOGIN_TYPE,
    payload: data
  }
}

export const saveProfiles = (data: Array<any>) => {
  return {
    type: GET_PROFILE,
    payload: data
  }
}

export const getProfiles = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get('https://645644b92e41ccf16918360b.mockapi.io/profile');
      dispatch(saveProfiles(response.data));
    } catch (e) {
      console.log(e);
    }
  }

}
