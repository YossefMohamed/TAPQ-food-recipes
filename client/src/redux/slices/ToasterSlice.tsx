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
      state.errors = [...state.errors, action.payload];
    },
    deleteToaster: (state, action: PayloadAction<string>) => {
      state.errors = state.errors.filter((err) => err !== action.payload);
    },
  },
});

export const { addToaster, deleteToaster } = toasterSlice.actions;
