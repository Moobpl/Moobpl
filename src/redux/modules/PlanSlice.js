import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

//todos 
export const __patchTodos = createAsyncThunk(
  "plan/todos/patchTodos",
  async (payload, thunkAPI) => {
    // console.log(payload)
    try {
      const data = await axios.patch(`https://moobplback.herokuapp.com/plan/${payload._id}/todos`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//todo
export const __patchTodo = createAsyncThunk(
  "plan/todos/todo/patchTodo",
  async (payload, thunkAPI) => {
    // console.log(payload)
    try {
      const data = await axios.patch(`https://moobplback.herokuapp.com/plan/${payload._id}/todos/${payload._id}/todo`, payload);
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
      state.isLoading = true;
    },
    [__postPlan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignupSucess = true;
      state.isSignupError = false;
    },
    [__postPlan.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignupError = action.payload;
    },
    [__getPlan.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPlan.fulfilled]: (state, action) => {
      state.plans = action.payload;
      state.isLoading = false;
    },
    [__getPlan.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignupError = action.payload;
    },
    [__patchTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchTodos.fulfilled]: (state, action) => {
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.todos = action.payload.todos;
      state.isLoading = false;
    },
    [__patchTodos.rejected]: (state, action) => {
    },

    //todo
    [__patchTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      const todos = state.plans.find((item) => item._id === action.payload._id.todos._id);
      console.log(todos);
      todos.todo = action.payload.todo;
      state.isLoading = false;
    },
    [__patchTodo.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});


export const { } = planSlice.actions;
export default planSlice.reducer;