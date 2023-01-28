import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  favorites: [],
  loading: false,
  error: [],
};
export const addToFavorite = createAsyncThunk(
  "favorites/addToFavorite",
  async ({ id }: { id: string }, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/recipes/favorites/" + id,
        {},
        {
          withCredentials: true,
        }
      );

      return data.data;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (_, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/recipes/favorites/me",
        {
          withCredentials: true,
        }
      );

      return data.data;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToFavorite.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.loading = false;
    });
    builder.addCase(addToFavorite.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addToFavorite.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.loading = false;
    });
    builder.addCase(getFavorites.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getFavorites.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default favoritesSlice;
