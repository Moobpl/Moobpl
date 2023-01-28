import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

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

export const __postPlan = createAsyncThunk(
    "plan/postplan",
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            // const data = await axios.post("http://localhost:3001/plans", payload);
            const data = await axios.post("http://localhost:8080/plan", payload);
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
);

const initialState = {
    plans: [],

    isGetPlanLoading: false, // 계획 불러오기 로딩
    isGetplanSucess: false, // 계획 불러오기 성공
    isGetError: false, // 계획 불러오기 실패

    isPostPlanLoading: false, // 계획 추가 로딩
    isPostPlanSucess: false, // 계획 추가 성공
    isPostPlanError: false, // 계획 추가 실패

    isDeletePlanLoading: false, // 계획 삭제 로딩
    isDeletePlanSucess: false, // 계획 삭제 성공
    isDeletePlanError: false, // 계획 삭제 실패
}

const planSlice = createSlice({
    name: "plans", //모듈 이름
    initialState,
    reducers: {
    },
    extraReducers: {
        // 계획 불러오기
        [__getPlan.pending]: (state) => {
            state.isGetPlanLoading = true;
        },
        [__getPlan.fulfilled]: (state, action) => {
            state.plans = action.payload;
            state.isGetplanSucess = true;
            state.isGetPlanLoading = false;
        },
        [__getPlan.rejected]: (state, action) => {
            state.isGetPlanLoading = false;
            state.isGetError = action.payload;
        },
        
        // 계획 등록
        [__postPlan.pending]: (state) => {
            state.isPostPlanLoading = true;
            state.isPostplanSucess = false;
        },
        [__postPlan.fulfilled]: (state, action) => {
            state.isPostPlanLoading = false;
            state.isPostplanSucess = true;
            state.plans.push(action.payload)
        },
        [__postPlan.rejected]: (state, action) => {
            state.isPostPlanLoading = false;
            state.isPostError = action.payload;
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

        // 체크리스트 수정
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