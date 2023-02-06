import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;


// 회원가입
export const __postUser = createAsyncThunk(
  "user/signUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`/api/user/signup`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 로그인
export const __postLogin = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`/api/user/login`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 로그아웃
export const __postLogout = createAsyncThunk(
  "user/logout",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`/api/user/logout`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 프로필수정
export const __patchUser = createAsyncThunk(
  "user/patchInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch("/api/user", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 회원정보 불러오기
export const __getUser = createAsyncThunk(
  "user/getUserInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("/api/user");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  me: [],

  isUserLoading: false,
  // 회원가입 상태
  isSignupSucess: false,
  isSignupError: false,
  // 로그인 상태
  isLoginSucess: false,
  isLoginError: false,
  // 로그아웃 상태
  isLogoutSucess: false,
  isLogoutError: false,
  // 회정정보 상태
  isGetuserSucess: false,
  isGetuserError: false,
  // 정보수정 상태
  isUpdateSucess: false,
  isUpdateError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clean: state => {
      state.isSignupSucess = false;
      state.isSignupError = false;
      // 로그인 상태
      state.isLoginSucess = false;
      state.isLoginError = false;
      // 로그아웃 상태
      state.isLogoutSucess = false;
      state.isLogoutError = false;
      // 회정정보 상태
      state.isGetuserSucess = false;
      state.isGetuserError = false;
      // 정보수정 상태
      state.isUpdateSucess = false;
      state.isUpdateError = false;
    },
  },
  extraReducers: {
    // 회원가입 리듀서
    [__postUser.pending]: (state) => {
      state.isUserLoading = true;
    },
    [__postUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isSignupSucess = true;
      state.isSignupError = false;
    },
    [__postUser.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isSignupError = action.payload;
    },
    // 로그인 리듀서
    [__postLogin.pending]: (state) => {
      state.isUserLoading = true;
      state.isLoginSucess = false;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isLoginSucess = true;
      state.isLoginError = false;
      state.me = action.payload;
    },
    [__postLogin.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isLoginError = action.payload;
    },

    // 로그아웃 리듀서
    [__postLogout.pending]: (state) => {
      state.isUserLoading = true;
    },
    [__postLogout.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isLogoutSucess = true;
      state.isLogoutError = false;
      state.me = null;
    },
    [__postLogout.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.logoutErr = action.payload;
    },

    // 유저 정보수정 리듀서
    [__patchUser.pending]: (state) => {
      state.isUserLoading = true;
    },
    [__patchUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isUpdateSucess = true;
      state.isUpdateError = true;
      state.me.nickName = action.payload.nickName
      state.me.profile = action.payload.profile
    },
    [__patchUser.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isUpdateError = action.payload;
    },

    // 유저정보가져오기 리듀서
    [__getUser.pending]: (state) => {
      state.isUserLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isGetuserSucess = true;
      state.isGetuserError = false;
      state.me = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isGetuserError = action.payload;
    },
  }
});

export const { clean } = userSlice.actions;
export default userSlice.reducer;