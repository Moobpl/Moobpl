import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const __postPlan = createAsyncThunk(
  "plan/postplan",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      // const data = await axios.post("http://localhost:3001/plans", payload);
      const data = await axios.post("https://moobplback.herokuapp.com/plan", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __getPlan = createAsyncThunk(
  "plan/getPlan",
  async (payload, thunkAPI) => {
    //dispatch(함수명(payload))
      try {
          const data = await axios.get("https://moobplback.herokuapp.com/plan", {
              withCredentials: true,
            }); 
            //백엔드 응답(res)값이 data안으로 들어옴
          return thunkAPI.fulfillWithValue(data.data);
          
          // const 함수명 = await axios.get("https://moobplback.herokuapp.com/plan", {
          //     withCredentials: true,
          //   }); 
          //   //백엔드 응답(res)값이 data안으로 들어옴
          // return thunkAPI.fulfillWithValue(함수명.data);

      } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data);
      }
  }
);

export const __patchCheckList = createAsyncThunk(
    "plan/postPlan",
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const data = await axios.patch(`http://localhost:8080/plan/${payload._id}/checklist`, payload);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
  plans: [],
}

const planSlice = createSlice({
  name: "plans", //모듈 이름
  initialState,
  reducers: {
  },
  extraReducers: {
    [__postPlan.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postPlan.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSignupSucess = true;
      state.isSignupError = false; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postPlan.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSignupError = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, 
    [__getPlan.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPlan.fulfilled]: (state, action) => {
      state.plans = action.payload;
      state.isLoading = false;
    }, //payload === data.data 
       //액션객체 안에 payload값이 있다 
    [__getPlan.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSignupError = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});


// export const {} = planSlice.actions;
// export default planSlice.reducer;