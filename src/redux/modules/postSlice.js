import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



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
    }
});

export const { } = postSlice.actions;
export default postSlice.reducer;