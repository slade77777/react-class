const initialState = {
  username: '',
  password: ''
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      console.log('action data:' , action)
      state.username = action.payload.username;
      state.password = action.payload.password;
      return state;
    default:
      return state;
  }
}
