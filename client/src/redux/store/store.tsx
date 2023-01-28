import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../slices/ThemeSlice";
import logger from "redux-logger";
import userSlice from "../slices/userSlice";
import { toasterSlice } from "../slices/ToasterSlice";
import recipeSlice from "../slices/recipeSlice";
import favoritesSlice from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice.reducer,
    userState: userSlice.reducer,
    toasterState: toasterSlice.reducer,
    recipeState: recipeSlice.reducer,
    favoritesState: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
