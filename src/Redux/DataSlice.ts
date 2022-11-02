import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

interface DataState {
  value: number;
}

const initialState: DataState = {
  value: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.value;

export default dataSlice.reducer;
