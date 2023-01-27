import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../slices/ThemeSlice";
import logger from "redux-logger";
import userSlice from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice.reducer,
    userState: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
