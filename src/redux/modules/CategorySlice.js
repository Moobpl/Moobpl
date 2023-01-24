import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

}

export const _regionList = createAsyncThunk(
  "postRegionList",
  async (payload, thunkAPI) => {
    console.log("페이로드확인", payload);
    try { 
       const data = await axios.post("http://localhost:3001/plans", payload);
       return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },  
);






export const CategorySlice = createSlice({
  name: "category",
  initialState, 
  reducers: {},
  extraReducers: {
    //선택값 new set담기
    [_regionList.fulfilled]: (state, action) => {
      const setRegionList = new Set(
        action.payload.map((item) => {
          switch (item.region) {
            case "서울전체":
              return { ...item, region: "서울 전체" };
            default:
              return item;
          }
        }),
      );
      //지역 선택한것 배열 뽑기 
      state.regionList = [...setRegionList]
        .filter((item) => item.region === "서울 전체")
        .concat(
          [...setRegionList].filter(
            (item) => item.region !== "서울 전체",
          ),
        );
    },
    [_regionList.rejected]: (state, action) => {
      console.log(action);
    },
  }

})

export const {} = CategorySlice.actions;
export default CategorySlice.reducers;