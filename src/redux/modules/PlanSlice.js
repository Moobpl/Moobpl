import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

export const __postPlan = createAsyncThunk(
  "plan/postplan",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("/api/plan", payload);
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
      const data = await axios.get("/api/plan");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//todos추가 
export const __patchTodos = createAsyncThunk(
  "plan/todos/patchTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(`/api/plan/${payload._id}/todos`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//todos삭제
export const __deleteTodos = createAsyncThunk(
  "plan/todos/deletTods",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`/api/plan/${payload.planId}/todos/${payload.todosId}`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

//todo추가
export const __patchTodo = createAsyncThunk(
  "plan/todos/todo/patchTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(`api/plan/${payload.planId}/todos/${payload._id}/todo`, payload);

      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//todo삭제 
export const __deleteTodo = createAsyncThunk(
  "plan/todos/todo/deleteTodo",
  async (payload, thunkAPI) => {

    try {
      const data = await axios.delete(`/api/plan/${payload.planId}/todos/${payload.todosId}/todo/${payload._id}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __deletePlan = createAsyncThunk(
  "plan/deleteplan",
  async (payload, thunkAPI) => {

    try {
      await axios.delete(`/api/plan/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __patchCheckList = createAsyncThunk(
  "plan/patchCheckList",
  async (payload, thunkAPI) => {

    try {
      const data = await axios.patch(`/api/plan/${payload._id}/checklist`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  plans: [],

  isPlansLoading: false,

  // 계획등록 상태
  isPostPlanSucess: false,
  isPostPlanError: false,

  // 계획삭제 상태
  isDeletePlanSucess: false,
  isDeletePlanError: false,

  // 계획불러오기 상태
  isGetPlanSucess: false,
  isGetPlanError: false,

  // todos등록 상태
  isPostTodosSucess: false,
  isPostTodosError: false,

  // todos등록 삭제
  isDeleteTodosSucess: false,
  isDeleteTodosError: false,

  // todo등록 상태
  isPostTodoSucess: false,
  isPostTodoError: false,

  // todo등록 삭제
  isDeleteTodoSucess: false,
  isDeleteTodoError: false,

  // 체크리스트 수정
  isPatchCheckSucess: false,
  isPatchCheckError: false,
}

const planSlice = createSlice({
  name: "plans", //모듈 이름
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
    // 계획 등록
    [__postPlan.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__postPlan.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostPlanSucess = true;
      state.isPostPlanError = false;
      state.plans.push(action.payload)
    },
    [__postPlan.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostPlanError = action.payload;
    },

    // 계획 삭제
    [__deletePlan.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__deletePlan.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeletePlanSucess = true;
      state.isDeletePlanError = false;
      state.plans = state.plans.filter((item) => item._id !== action.payload);
    },
    [__deletePlan.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeletePlanError = action.payload;
    },

    // 계획 불러오기
    [__getPlan.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__getPlan.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isGetPlanSucess = true;
      state.isGetPlanError = false;
      state.plans = action.payload;

      if (state.plans?.length > 0) {
        state.plans.forEach((plan) => {
          if (plan.todos.length > 0) {
            plan.todos.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
          }
        })
      }
    },
    [__getPlan.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isGetPlanError = action.payload;
    },

    //todos 추가
    [__patchTodos.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__patchTodos.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostTodosSucess = true;
      state.isPostTodosError = false;
      const plan = state.plans.find((item) => item._id === action.payload._id);
      const arr = action.payload.todos
      arr.sort((a, b) => {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
      })

      plan.todos = arr
    },
    [__patchTodos.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostTodosError = action.payload;
    },

    //todos 삭제
    [__deleteTodos.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeleteTodoSucess = true;
      state.isDeleteTodoError = false;
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.todos = plan.todos.filter((todos) => todos._id !== action.payload.todosId);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeleteTodoError = action.payload;
    },


    //todo 추가
    [__patchTodo.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostTodoSucess = true;
      state.isPostTodoError = false;
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.todos = action.payload.todos;
    },
    [__patchTodo.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isPostTodoError = action.payload;
    },

    //todo 삭제
    [__deleteTodo.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeleteTodoSucess = true;
      state.isDeleteTodoError = false;
      const plan = state.plans.find((item) => item._id === action.payload._id);
      const todos = plan.todos.find((item) => item._id === action.payload.todosId);
      todos.todo = todos.todo.filter((todo) => todo._id !== action.payload.todoId);
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isDeleteTodoError = action.payload;
    },

    //체크리스트 수정
    [__patchCheckList.pending]: (state) => {
      state.isPlansLoading = true;
    },
    [__patchCheckList.fulfilled]: (state, action) => {
      state.isPlansLoading = false;
      state.isPatchCheckSucess = true;
      state.isPatchCheckError = false;
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.checkList = action.payload.checkList
    },
    [__patchCheckList.rejected]: (state, action) => {
      state.isPlansLoading = false;
      state.isPatchCheckError = action.payload;
    },
  },
});

export const { clean } = planSlice.actions;
export default planSlice.reducer;