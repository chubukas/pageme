import { createSlice } from '@reduxjs/toolkit';

import { data } from "./data"
import { MyDataState } from "./interface";


const initialState: MyDataState = {
  myData: data,
}


export const dataSlice = createSlice({
  name: ' mainData',
  initialState,
  reducers: {}
})



export default dataSlice.reducer;