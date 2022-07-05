import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { order as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIcecream: number;
};

const initialState: InitialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIcecream--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;
