import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../slices/ThemeSlices";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    themeState: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
