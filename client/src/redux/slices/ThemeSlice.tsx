import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeToDarkTheme: (state) => {
      state.theme = "dark";
    },
    changeToLightTheme: (state) => {
      state.theme = "light";
    },
  },
});

export const { changeToDarkTheme, changeToLightTheme } = themeSlice.actions;
