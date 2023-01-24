import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const __getPlan = createAsyncThunk(
    "plan/getPlan",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("https://moobplback.herokuapp.com/plan");
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const __postPlan = createAsyncThunk(
    "plan/postPlan",
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const data = await axios.post("https://moobplback.herokuapp.com/plan", payload);
            return thunkAPI.fulfillWithValue(data.data);
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
    plan:null,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [__getPlan.pending]: (state) => {
            state.isLoading = true;
        },
        [__getPlan.fulfilled]: (state, action) => {
            state.plan = action.payload;
        },
        [__getPlan.rejected]: (state, action) => {
            state.isLoading = false;
        },
        [__postPlan.pending]: (state) => {
            state.isLoading = true;
        },
        [__postPlan.fulfilled]: (state, action) => {
            state.checkList = action.payload;
            state.postPlanSuccess = true;
        },
        [__postPlan.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
});

export const { } = postSlice.actions;
export default postSlice.reducer;