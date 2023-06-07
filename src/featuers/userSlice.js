import { useNavigate } from "react-router-dom";

const { createSlice } = require("@reduxjs/toolkit");

export const useSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    
    },
    logout:(state, action)=> {
        state.user = null
        state.isLoggedIn = false;
    }
  },
});
export const { login, logout } = useSlice.actions;

export default useSlice.reducer;