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

//todos추가 
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

//todos삭제
export const __deleteTodos = createAsyncThunk(
  "plan/todos/deletTods",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`https://moobplback.herokuapp.com/plan/${payload.planId}/todos/${payload.todosId}`, payload);
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
      const data = await axios.patch(`https://moobplback.herokuapp.com/plan/${payload.planId}/todos/${payload._id}/todo`, payload);
      console.log("데이터보기", data);
      return thunkAPI.fulfillWithValue(data.data);
      //백엔드에서 파라미터로 data를 넘겨준것 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//todo삭제 
export const __deleteTodo = createAsyncThunk(
  "plan/todos/todo/deleteTodo",
  async (payload, thunkAPI) => {
    console.log("payload알아보기", payload)
    try {
      const data = await axios.delete(`https://moobplback.herokuapp.com/plan/${payload.planId}/todos/${payload.todosId}/todo/${payload._id}`);
      console.log("data알아보기", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __deletePlan = createAsyncThunk(
  "plan/deleteplan",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      // const data = await axios.post("http://localhost:3001/plans", payload);
      await axios.delete(`https://moobplback.herokuapp.com/plan/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __patchCheckList = createAsyncThunk(
  "plan/patchCheckList",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.patch(`https://moobplback.herokuapp.com/plan/${payload._id}/checklist`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

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
    // 계획 삭제
    [__deletePlan.pending]: (state) => {
      state.isDeletePlanLoading = true;
    },
    [__deletePlan.fulfilled]: (state, action) => {
      state.plans = state.plans.filter((item) => item._id !== action.payload);
      state.isDeletePlanLoading = false;
    },
    [__deletePlan.rejected]: (state, action) => {
      state.isDeletePlanLoading = false;
      state.isDeletePlanError = action.payload;
    },
    // 계획 불러오기
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

    //todos 추가
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

    //todos삭제
    [__deleteTodos.pending]: (state) => {
      state.isDeleteTodoLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      console.log(action);
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.todos = plan.todos.filter((todos) => todos._id !== action.payload.todosId);

      state.isDeleteTodosLoading = true;
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isDeleteTodosLoading = false;
      state.isDeleteTodosError = action.payload;
    },


    //todo추가
    [__patchTodo.pending]: (state) => {
      state.isTodoLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      // 1. 업데이트 시킬 plan을 찾는다.
      // 2. 찾은 플랜에서 업데이트 시킬 todos를 찾는다.
      // 3. 찾은 todos안에 업데이트 시킨 todo를 집어 넣는다.
      const plan = state.plans.find((item) => item._id === action.payload._id);
      // 플랜에 객채를 찾았으면 이제 todos를 찾아야 하기 때문에 찾는다 plan에서 찾는다.
      plan.todos = action.payload.todos;
      // console.log(plan.todos);
      // plan.todos[action.payload._id] = action.payload.todo;
      // state.isLoading = false;
    },
    [__patchTodo.rejected]: (state, action) => {
    },

    //todo삭제
    [__deleteTodo.pending]: (state) => {
      state.isDeleteTodoLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      console.log(action);
      const plan = state.plans.find((item) => item._id === action.payload._id);
      const todos = plan.todos.find((item) => item._id === action.payload.todosId);
      todos.todo = todos.todo.filter((todo) => todo._id !== action.payload.todoId);

      state.isDeleteTodoLoading = true;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isDeleteTodoLoading = false;
      state.isDeleteTodoError = action.payload;
    },

    [__patchCheckList.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchCheckList.fulfilled]: (state, action) => {
      const plan = state.plans.find((item) => item._id === action.payload._id);
      plan.checkList = action.payload.checkList
      state.isLoading = false;
    },
    [__patchCheckList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignupError = action.payload;
    },
  },
});


export const { } = planSlice.actions;
export default planSlice.reducer;