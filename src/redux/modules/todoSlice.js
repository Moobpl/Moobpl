import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const __patchTodos = createAsyncThunk(
    "plan/todos/patchTodos",
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const data = await axios.patch(`https://moobplback.herokuapp.com/plan/${payload._id}/todos`, payload);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const initialState = {
    plans:null,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: {
    }
});

export const { } = todoSlice.actions;
export default todoSlice.reducer;