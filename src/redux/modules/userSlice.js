import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const __postUser = createAsyncThunk(
  "user/postUser",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.post("https://moobplback.herokuapp.com/user/signup", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __postLogin = createAsyncThunk(
  "login/loginUser",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.post("https://moobplback.herokuapp.com/user/login", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __getUser = createAsyncThunk(
  "get/User",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("https://moobplback.herokuapp.com/user");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __postLogout = createAsyncThunk(
  "logout/User",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.post("api/user/logout", payload, {
        withCredentials: true,
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __patchUser = createAsyncThunk(
  "patch/User",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.patch("api/user", payload, {
        withCredentials: true,
      });
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  me: [],
  isLoading: false,
  isSignupSucess: false,
  isSignupError: false,
  isLoginSucess: false,
  isLoginError: false,
  isUpdateSucess : false, // 프로필 업데이트 성공여부
  isUpdateError : false, // 프로필 업데이트 에러
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSignupSucess = true;
      state.isSignupError = false; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSignupError = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__postLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      state.isLogoutSucess = false;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isLoginSucess = true;
      state.me = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.loginError = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__postLogout.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postLogout.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isLogoutSucess = true;
      state.me = []; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postLogout.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.logoutErr = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isLogoutSucess = true;
      state.me = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.logoutErr = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__patchUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__patchUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isUpdateSucess = true;
    },
    [__patchUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isUpdateError = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  }
});

export const { } = userSlice.actions;
export default userSlice.reducer;