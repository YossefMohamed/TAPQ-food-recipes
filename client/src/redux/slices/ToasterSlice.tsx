import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  errors: string[];
} = {
  errors: [],
};

export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    addToaster: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.errors = [...state.errors, action.payload];
    },
  },
});

export const { addToaster } = toasterSlice.actions;
